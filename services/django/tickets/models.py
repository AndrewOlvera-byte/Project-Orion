from django.conf import settings
from django.db import models

class Ticket(models.Model):
    class Status(models.TextChoices):
        OPEN = open, Open
        IN_PROGRESS = in_progress, In

