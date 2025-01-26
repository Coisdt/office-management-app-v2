<template>
  <div v-if="loading" class="spinner text-center">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
  <div v-else-if="props.offices.length === 0" class="text-center">
    No offices found.
  </div>
  <div
    class="office-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    v-else
  >
    <div
      v-for="office in paginatedItems"
      :key="office.id"
      class="cursor-pointer"
      @click="navigateToOffice(office.id)"
    >
      <OfficeDetailsCard :office="office" @stop-propagation="handleAction" />
    </div>
  </div>

  <!-- pagination -->
  <VueAwesomePaginate
    v-model="currentPage"
    class="pagination-container"
    :total-items="props.offices.length"
    :items-per-page="itemsPerPage"
    :range="2"
    :show-prev-next="true"
    :prev-text="'Previous'"
    :next-text="'Next'"
    @page-change="onPageChange"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import OfficeDetailsCard from "./OfficeDetailsCard.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { VueAwesomePaginate } from "vue-awesome-paginate";

const store = useStore();
const router = useRouter();

let props = defineProps({
  offices: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const loading = computed(() => store.state.loading);

//
//METHODS
//

// pagination
const currentPage = ref(1); // Current page number
const itemsPerPage = ref(5); // Number of items per page

// Compute paginated items based on the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return props.offices.slice(start, end);
});

// Handle page changes
const onPageChange = (newPage) => {
  currentPage.value = newPage;
};

onMounted(() => {
  store.dispatch("fetchOffices");
});

// Navigate to the office page
const navigateToOffice = (id) => {
  router.push(`/office/${id}`);
};

// Stop parent click propagation
const handleAction = (event) => {
  event.stopPropagation();
};
</script>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: auto;
}
.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #3498db;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2s infinite ease-in-out;
}
.double-bounce2 {
  animation-delay: -1s;
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
