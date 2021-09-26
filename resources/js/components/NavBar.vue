<template>
  <div id="nav" class="~border border-b mb-5 pb-3">
    <div class="flex">
      <div class="font-bold">
        <router-link to="/" class="logo p-2">JobSearch App</router-link>
      </div>
      <div class="ml-auto">
        <ul class="flex gap-3 justify-center">
          <li>
            <router-link to="/" class="font-semibold p-2"> Home </router-link>
          </li>
          <li>
            <router-link to="/jobs" class="font-semibold p-2">
              Emprego
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
