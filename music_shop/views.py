from django.shortcuts import render, get_object_or_404
from music_shop.models import Product
from django.views import generic
from cart.forms import CartAddProductForm
from .forms import SearchForm
from django.views.generic import ListView
from django.db.models import Q


def home(request):
    context = {}
    return render(request,'home.html', context)

def base(request):
    context = {}
    return render(request,'base.html', context)

def catalog(request):
    products = Product.objects.all()
    context = {"products": products}
    return render(request,'catalog.html', context)

def about_us(request):
    context = {}
    return render(request,'about_us.html', context)



class ProductListView(generic.ListView):
    model = Product


class ProductDetailView(generic.DetailView):
    model = Product

