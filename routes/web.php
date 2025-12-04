<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');

Route::get('/admin/dashboard', [DashboardController::class, 'showDashboard'])->name('dashboardPage');

Route::get('/admin/category', [CategoryController::class, 'showCategory'])->name('categoryPage');

Route::get('/admin/article', [ArticlesController::class, 'showArticle'])->name('articlePage');

Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout'])->name('logoutPage');