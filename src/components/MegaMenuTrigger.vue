<script setup lang="ts">
import MegaMenuPanel from '@/components/MegaMenuPanel.vue';
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

interface MegaMenuItem {
  label: string;
  to: string;
  image: string;
  description: string;
}

const props = defineProps<{
  label: string;
  items: MegaMenuItem[];
  activePath: string;
  headerEl: HTMLElement | null;
  activeClass: string;
  inactiveClass: string;
  menuKey: string;
  activeMenu: string | null;
}>();

const emit = defineEmits<{
  'update:activeMenu': [string | null];
}>();

const triggerRef = ref<HTMLButtonElement | null>(null);
const menuRef = ref<HTMLDivElement | null>(null);
const menuStyle = ref<Record<string, string>>({});
let closeTimer: number | null = null;

const isActive = computed(() => props.items.some((item) => item.to === props.activePath));
const isOpen = computed(() => props.activeMenu === props.menuKey);

const updateMenuPosition = () => {
  if (!props.headerEl || !triggerRef.value || !menuRef.value) return;
  const headerRect = props.headerEl.getBoundingClientRect();
  menuStyle.value = {
    top: `${Math.round(headerRect.bottom)}px`,
  };
};

const openMenu = async () => {
  if (closeTimer) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }
  emit('update:activeMenu', props.menuKey);
  await nextTick();
  updateMenuPosition();
};

const toggleMenu = async () => {
  if (isOpen.value) {
    closeMenu(true);
    return;
  }
  await openMenu();
};

const closeMenu = (immediate = false) => {
  if (closeTimer) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }
  if (!isOpen.value) {
    return;
  }
  if (immediate) {
    emit('update:activeMenu', null);
    return;
  }
  closeTimer = window.setTimeout(() => {
    if (isOpen.value) {
      emit('update:activeMenu', null);
    }
    closeTimer = null;
  }, 220);
};

const handleWindowUpdate = () => {
  if (!isOpen.value) return;
  updateMenuPosition();
};

onMounted(() => {
  window.addEventListener('resize', handleWindowUpdate);
  window.addEventListener('scroll', handleWindowUpdate, true);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowUpdate);
  window.removeEventListener('scroll', handleWindowUpdate, true);
});
</script>

<template>
  <div class="relative" @mouseenter="openMenu" @mouseleave="closeMenu()">
    <button
      ref="triggerRef"
      class="inline-flex items-center gap-2 transition uppercase"
      :class="isActive ? activeClass : inactiveClass"
      type="button"
      @focus="openMenu"
      @blur="closeMenu()"
      @click.prevent="toggleMenu"
    >
      <span class="uppercase text-sm tracking-[0.2em]">{{ label }}</span>
      <svg class="size-6 transition"  :class="isOpen ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" d="m8 9.086 4 4 4-4 1.414 1.414L12 15.914 6.586 10.5z" clip-rule="evenodd"/>
      </svg>

    </button>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        ref="menuRef"
        class="fixed left-0 right-0 z-20"
        :style="menuStyle"
        @mouseenter="openMenu"
        @mouseleave="closeMenu(true)"
        @focusout="closeMenu(true)"
      >
        <MegaMenuPanel :active-path="activePath" :items="items" :on-navigate="() => closeMenu(true)" />
      </div>
    </Transition>
  </div>
</template>
