from django.db import models

class SurveyResponse(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    have_travel_partners = models.CharField(max_length=5)
    accommodation = models.CharField(max_length=15)
    next_destination = models.CharField(max_length=200)
