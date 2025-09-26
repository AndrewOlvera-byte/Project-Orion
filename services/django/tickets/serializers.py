from rest_framework import serializers
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Ticket
        fields = [
            'id', 'title', 'description', 'status', 'user', 'user_username',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']


