<template>
    <LoginLayout
        title="Reset Password"
        info="Please enter your email address"
    >
    <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="relative">
            <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                >Email</label
            >
            <input
                class="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="email"
                placeholder="mail@gmail.com"
            />
        </div>
        <div>
            <button
                type="submit"
                class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
            >
                Request a new password
            </button>
        </div>
        <div class="flex flex-col items-center justify-center mt-10">
            <p
            class="flex flex-col items-center justify-center text-center text-md text-gray-500"
        >
            <span>Don't have an account?</span>
            <a
                href="/register"
                class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >Sign up</a
            >
        </p>
        <p
            class="flex flex-col items-center justify-center mt-4 text-center text-md text-gray-500"
        >
            <span>Or</span>
            <a
                href="/login"
                class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >Login</a
            >
        </p>
        </div>
      </form>
    </LoginLayout>
</template>

<script setup>
import LoginLayout from "../components/LoginLayout.vue";

</script>

