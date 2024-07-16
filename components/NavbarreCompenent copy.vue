<template>
  <!-- Disclosure component de Headless UI agit comme conteneur pour la navigation -->
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Bouton du menu mobile, visible uniquement sur les petits écrans -->
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <!-- DisclosureButton permet de basculer le menu mobile -->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Ouvrir le menu principal</span>
            <!-- Bars3Icon apparaît lorsque le menu est fermé -->
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <!-- XMarkIcon apparaît lorsque le menu est ouvert -->
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <!-- Logo et liens de navigation -->
        <div class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Votre entreprise" />
          </div>
          <!-- Navigation de bureau, cachée sur les petits écrans -->
          <div class="hidden lg:ml-6 lg:block">
            <div class="flex space-x-4">
              <!-- Boucle à travers les éléments de navigation -->
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <!-- Notifications et menu déroulant du profil -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
          <!-- Bouton de notification -->
          <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Voir les notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <!-- Menu déroulant du profil -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Ouvrir le menu utilisateur</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </MenuButton>
            </div>
            <!-- Éléments du menu déroulant -->
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Votre profil</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Paramètres</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Déconnexion</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- Menu mobile, affiché uniquement sur les petits écrans -->
    <DisclosurePanel class="lg:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Boucle à travers les éléments de navigation pour le menu mobile -->
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" 
        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 
        'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
        {{ item.name }}
      </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Tableau de bord', href: '#', current: true },
  { name: 'Équipe', href: '#', current: false },
  { name: 'Projets', href: '#', current: false },
  { name: 'Calendrier', href: '#', current: false },
]
</script>
