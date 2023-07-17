import json
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import SurveyResponse


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
@require_http_methods(["POST", "OPTIONS"])
def create_survey(request):
    data = json.loads(request.body)
    name = data['name']
    email = data['email']
    haveTravelPartners = data['haveTravelPartners']
    accommodation = data['accommodation']
    nextDestination = data['nextDestination']

    if not (name and email and haveTravelPartners and accommodation and nextDestination):
        return JsonResponse({'status': 'error', 'message': 'Unable to record your survey. Please try again.'}, status=400)

    if SurveyResponse.objects.filter(email=email).exists():
        return JsonResponse({'status': 'error', 'message': 'Our records indicate that you have already completed this survey. Thank you for your time!'}, status=400)

    survey = SurveyResponse.objects.create(
        name=name,
        email=email,
        have_travel_partners=haveTravelPartners,
        accommodation=accommodation,
        next_destination=nextDestination
    )
    survey.save()
    return JsonResponse({'status': 'success', 'message': 'Success! Your survey has been recorded.'}, status=200)
