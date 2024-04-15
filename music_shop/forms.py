from django import forms
class ContactForm(forms.Form):
    name = forms.CharField(label="Your name")
    email = forms.CharField(label="Your e-mail")
    massage = forms.CharField(label="Your e-mail")

class SearchForm(forms.Form):
    query = forms.CharField()