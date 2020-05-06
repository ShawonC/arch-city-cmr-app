<?php

use App\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        $user = \App\User::create([
            'email' => env('USER_EMAIL'),
            'name' => env('USER_NAME'),
            'password' => bcrypt(env('USER_PASSWORD', 'secret'))
        ]);
        $user->assignRole('super-admin');

        $user = \App\User::create([
            'email' => env('FRONTEND_EMAIL'),
            'name' => env('FRONTEND_NAME'),
            'password' => bcrypt(env('FRONTEND_PASSWORD', 'secret'))
        ]);
        $user->assignRole('super-admin');

        // factory(App\User::class, 40)->create()->each(function ($user) {
        //     $role = \App\Role::inRandomOrder()->first();
        //     $user->assignRole($role->name);
        // });

    }
}
