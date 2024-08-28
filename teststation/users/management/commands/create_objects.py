from django.core.management.base import BaseCommand
from users.models import User
from feature.models import Schedules

class Command(BaseCommand):
    help = 'Creates a superuser and some schedule entries.'

    def handle(self, *args, **options):
        tasks = [
            {"task1": "Render this properly"},
            {"task2": "Render this properly"},
            {"task3": "Render this properly"},
        ]

        obj= User.objects.filter(email= "admin@admin.com").first()
        obj.delete()
        
        # Create a superuser
        User.objects.create_user(email="admin@admin.com", password="admin12345")

        # Create Schedules entries
        Schedules.objects.create(
            name="TestCase Station 1",
            descriptions="This is to test your frontend skills",
            task=tasks
        )
        Schedules.objects.create(
            name="TestCase Station 2",
            descriptions="This is to test your frontend skills",
            task=tasks
        )
        Schedules.objects.create(
            name="TestCase Station 3",
            descriptions="This is to test your frontend skills",
            task=tasks
        )
        qs = User.objects.all()
        print(f"This is the user count: {qs.count()}")

        objs = Schedules.objects.all()
        print(f"This is the schedules count: {objs.count()}")
