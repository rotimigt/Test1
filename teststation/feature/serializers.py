from rest_framework import serializers
from .models import Schedules

#Serializer class 
class ScheduleSerializer(serializers.ModelSerializer):
    task= serializers.SerializerMethodField()
    
    class Meta:
        model = Schedules
        fields = "__all__"
        
    def get_task(self, obj):
        return obj.task
        
    
