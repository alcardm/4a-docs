from django.contrib import admin
from django.urls import path
from affiliatesApp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("affiliates/", views.AffiliatesCreateView.as_view()), 
    path("affiliates-list/", views.AffiliatesListView.as_view()), 
    path("affiliates/<int:pk>/", views.AffiliatesDetailView.as_view()), 
    path("affiliates-update/<int:pk>/", views.AffiliatesUpdateView.as_view()), 
    path('affiliates-delete/<int:pk>/', views.AffiliatesDeleteView.as_view())
]
