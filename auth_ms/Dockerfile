FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /users
WORKDIR /users
ADD . /users/
RUN pip install -r requirements.txt
EXPOSE 8001
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8001