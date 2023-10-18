<template>
    <header>
    <nav>
        <img
            src="../assets/logo-no-background.svg"
            class="logo"
            alt="logo"
        />
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">PLACES</a></li>
            <li><a href="#">ABOUT US</a> </li>
            <li><a href="#">CONTACT</a></li>
        </ul>
    </nav>
</header>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

nav {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav .logo {
    width: 200px;
}

nav ul li {
    list-style: none;
    display: inline-block;
    margin-left: 40px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
}
</style>