from django.shortcuts import render, redirect
from .models import User, UserRequest

def log_request(request):
    if request.method == 'POST':
        form = RequestForm(request.POST)
        if form.is_valid():
            user_request = UserRequest.objects.create(
                user=request.user,  # Assuming the user is authenticated
                request=form.cleaned_data['request_text'],
            )
            return redirect('dashboard')
    else:
        form = RequestForm()

    return render(request, 'log_request.html', {'form': form})