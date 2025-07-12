from django.urls import path
from . import views

urlpatterns = [
#     #  1: Core Functionality

#     # 1. Retrieve all short links for authenticated user
     path('my_links/', views.UserLinksListView.as_view(), name='user-links'),
     
     # update , delete short links
#     path('link/<int:pk>/', views.LinkDetailView.as_view(), name='link-detail'),

#     # 2. Bulk upload long URLs for shortening
#     path('bulk-upload/', views.BulkUploadView.as_view(), name='bulk-upload'),

#     #  2: Dashboard Analytics & Activity

#     # User dashboard analytics (total links, total clicks, )
#     path('dashboard/', views.DashboardAnalyticsView.as_view(), name='dashboard'),
#     # Show recent activity (recent links, recently expired)
#     path('recent/', views.RecentActivityView.as_view(), name='recent-activity'),

#     #  3: Filtering, Tags, Export
#     path('filter/', views.FilterLinksView.as_view(), name='filter-links'),
#     path('tag/<int:pk>/add/', views.AddTagToLinkView.as_view(), name='add-tag'),
#     path('tag/<int:pk>/remove/', views.RemoveTagFromLinkView.as_view(), name='remove-tag'),
#     path('tagged/<str:tag>/', views.LinksByTagView.as_view(), name='links-by-tag'),
#     path('export/', views.ExportLinksView.as_view(), name='export-links'),

#     #  4: Security & Starred
#     path('link/<int:pk>/protect/', views.PasswordProtectLinkView.as_view(), name='password-protect'),
#     path('link/<int:pk>/unprotect/', views.RemovePasswordView.as_view(), name='remove-password'),
#     path('link/<int:pk>/star/', views.StarLinkView.as_view(), name='star-link'),
#     path('link/<int:pk>/unstar/', views.UnstarLinkView.as_view(), name='unstar-link'),
#     path('favourites/', views.StarredLinksView.as_view(), name='favourite-links'),

#     #  5: Referrers & Performance
#     path('analytics/<int:pk>/referrers/', views.ReferrerStatsView.as_view(), name='referrer-stats'),
#     path('analytics/<int:pk>/score/', views.LinkScoreView.as_view(), name='link-score'),
#     path('analytics/top/', views.TopLinksView.as_view(), name='top-performing-links'),

#     #  6: Public Dashboard & Automation
#     path('public-share/<int:pk>/create/', views.CreatePublicDashboardView.as_view(), name='public-share-create'),
#     path('public-share/<int:pk>/revoke/', views.RevokePublicDashboardView.as_view(), name='public-share-revoke'),
#     path('public/<str:short_code>/stats/', views.PublicStatsView.as_view(), name='public-stats'),

#     path('api-key/generate/', views.GenerateAPIKeyView.as_view(), name='generate-api-key'),
#     path('api-key/revoke/', views.RevokeAPIKeyView.as_view(), name='revoke-api-key'),

#     path('webhook/subscribe/', views.WebhookSubscribeView.as_view(), name='webhook-subscribe'),
#     path('webhook/test/', views.WebhookTestView.as_view(), name='webhook-test'),
 ]
