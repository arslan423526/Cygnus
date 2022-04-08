from django.urls import path
from . import views

urlpatterns = [
    path('api/users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/users/register/', views.registerUser, name='register'),
    path('api/users/profile/', views.getUserProfile, name="users-profile"),
    path('api/users/profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('api/users/', views.getUsers, name="users"),
    path('api/users/<str:pk>/', views.getUserById, name='user'),
    path('api/users/update/<str:pk>/', views.updateUser, name='user-update'),
    path('api/users/delete/<str:pk>/', views.deleteUser, name='user-delete'),

    path('api/products/', views.getProducts, name="products"),
    path('api/products/create/', views.createProduct, name="product-create"),
    path('api/products/upload/', views.uploadImage, name="image-upload"),
    path('api/products/<str:pk>/reviews/', views.createProductReview, name="create-review"),
    path('api/products/top/', views.getTopProducts, name='top-products'),
    path('api/products/<str:pk>/', views.getProduct, name="product"),
    path('api/products/update/<str:pk>/', views.updateProduct, name="product-update"),
    path('api/products/delete/<str:pk>/', views.deleteProduct, name="product-delete"),

    path('api/orders/', views.getOrders, name='orders'),
    path('api/orders/add/', views.addOrderItems, name='orders-add'),
    path('api/orders/myorders/', views.getMyOrders, name='my-orders'),
    path('api/orders/<str:pk>/deliver/', views.updateOrderToDelivered, name='order-delivered'),
    path('api/orders/<str:pk>/', views.getOrderById, name='user-order'),
    path('api/orders/<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
]
