from django.urls import path, include, re_path

from . import views

urlpatterns = [
    path('', views.base),
    path('home/', views.home),
    path('catalog/', views.catalog),
    path('about_us/', views.about_us),
    path('accounts/', include('django.contrib.auth.urls')),
    # path('cart/', include ('cart.urls')),
    re_path(r'^products/$', views.ProductListView.as_view(), name='products'),
    re_path(r'^product/(?P<pk>\d+)$', views.ProductDetailView.as_view(), name='product-detail'),

]
