from django.contrib import admin

from .models import Team, Stat

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'ground', 'latitude', 'longitude')

class StatAdmin(admin.ModelAdmin):
    list_display = ('username', 'teams')

admin.site.register(Stat, StatAdmin)
admin.site.register(Team, TeamAdmin)