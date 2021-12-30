from django.contrib import admin

from .models import Team

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'ground_name', 'latitude', 'longitude')

admin.site.register(Team, TeamAdmin)