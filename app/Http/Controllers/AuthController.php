<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Muestra el formulario de login
     */
    public function showLoginForm() {
        return Inertia::render(component: 'login');
    }

    /**
     * Maneja el intento de login
     */
    public function login(Request $request)
    {
        // Validar los datos del formulario
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        return redirect()->route('dashboard');


        /* // Intentar autenticar al usuario
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            // Redirigir a la página de inicio o dashboard
            return redirect()->intended('/');
        }

        // Si falla la autenticación, devolver errores
        return back()->withErrors([
            'email' => 'Las credenciales proporcionadas no coinciden con nuestros registros.',
        ])->onlyInput('email'); */
    }

    /**
     * Cierra la sesión del usuario
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}

