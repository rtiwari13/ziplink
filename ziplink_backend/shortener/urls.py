from django.urls import path
from .views import *

urlpatterns = [
    # create short links
    path('create/', CreateShortURLView.as_view()),
    # put , delete 
    path('short_link/<int:pk>/', ShortURLDetailsView.as_view(), name='short-link-detail'),

    path('bulk/', BulkUploadView.as_view(), name= ' bulk_upload'),
    ]

#     path('my/', UserURLsView.as_view()),
#     path('filter/', FilterURLView.as_view()),
#     path('detail/<int:pk>/', ShortURLDetailView.as_view()),
#     path('qr/<str:short_code>/', QRDownloadView.as_view()),
