<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;
    
    protected $primaryKey= 'song_id';



    protected $fillable = [
        'title',
        'name',
        'date',
    ];
    
    
    protected $hidden = [
        'created_at',
        'updated_at',
    ];




}
