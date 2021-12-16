<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;

class PagesController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function sendEmail(Request $request)
    {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'pesan' => $request->pesan,
        ];
        Mail::to('bayu.anugerah99@gmail.com')->send(new SendEmail($data));
        return redirect('/')->with('message', 'Thank you for being interested in me.');;
    }
}
