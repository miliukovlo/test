<template>
  <main class="main">
    <select id="city" v-model="result.city" @change="onCityChange">
      <option v-for="option in cityOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select id="workshop" v-model="result.workshop" @change="onWorkshopChange">
      <option v-for="option in workshopOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select id="worker" v-model="result.worker">
      <option v-for="option in workerOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select id="brigade" v-model="result.brigade">
      <option v-for="option in brigadeOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select id="shift" v-model="result.shift">
      <option v-for="option in shiftOptions" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button @click="saveData">Сохранить</button>
  </main>
</template>

<script type="module">
import { cityArray, workshopData, workerData, brigadeData, shiftData } from '@/data/data';

export default {
  data() {
    return {
      cityOptions: cityArray,
      workshopOptions: workshopData,
      workerOptions: workerData,
      brigadeOptions: brigadeData,
      shiftOptions: shiftData,
        result: {
        city: 1,
        workshop: 1,
        worker: 1,
        brigade: 1,
        shift: 1,
      },
    };
    
  },
  methods: {

    onWorkshopChange() {
      this.workerOptions = workerData.filter((worker) => worker.workshop_id === this.result.workshop);
      this.result.worker = this.workerOptions[0].value;
    },
    onCityChange() {
      this.workshopOptions = workshopData.filter((workshop) => workshop.cityId === this.result.city);
      this.result.workshop = this.workshopOptions[0].value;
      this.onWorkshopChange()
    },
    saveData() {
      const cookieData = JSON.stringify(this.result);
      document.cookie = `formData=${cookieData}; path=/; max-age=3600`;
    },
  },
};
</script>

<style scoped>

</style>
