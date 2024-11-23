const cityArray = [
    { cityName: "Выберите город", id: 1 },
    { cityName: "Тюмень", id: 2 },
    { cityName: "Москва", id: 3 },
    { cityName: "Санкт-Петербург", id: 4 },
    { cityName: "Владивосток", id: 5 },
];

const workshopData = [
    {id: 1, workShop: "Выберите цех"},
    {id: 2, workShop:"Цех 1", cityId: 3},
    {id: 3, workShop:"Цех 2", cityId: 2},
    {id: 4, workShop:"Цех 3", cityId: 4},
    {id: 5, workShop:"Цех 4", cityId: 3},
    {id: 6, workShop:"Цех 5", cityId: 5},
    {id: 7, workShop:"Цех 6", cityId: 4},
    {id: 8, workShop:"Цех 7", cityId: 5},
];

const workerData = [
    {id: 1, worker: "Выберите сотрудника", workshop_id: 0},
    {id: 2, worker: "Сотрудник 2", workshop_id: 3},
    {id: 3, worker: "Сотрудник 3", workshop_id: 5},
    {id: 4, worker: "Сотрудник 4", workshop_id: 2},
    {id: 5, worker: "Сотрудник 5", workshop_id: 7},
    {id: 6, worker: "Сотрудник 6", workshop_id: 4},
    {id: 7, worker: "Сотрудник 7", workshop_id: 7},
    {id: 8, worker: "Сотрудник 8", workshop_id: 6},
    {id: 9, worker: "Сотрудник 9", workshop_id: 8},
    {id: 10, worker: "Сотрудник 10", workshop_id: 8},
    {id: 11, worker: "Сотрудник 11", workshop_id: 3},
    {id: 12, worker: "Сотрудник 12", workshop_id: 3},
    {id: 13, worker: "Сотрудник 13", workshop_id: 4},
    {id: 14, worker: "Сотрудник 14", workshop_id: 5},
    {id: 15, worker: "Сотрудник 15", workshop_id: 2},
    {id: 16, worker: "Сотрудник 16", workshop_id: 3},
];

const brigadeData = [
    {id: 1, value: "Выберите бригаду"},
    {id: 2, value: "Бригада A"},
    {id: 3, value: "Бригада B"},
    {id: 4, value: "Бригада C"},
    {id: 5, value: "Бригада D"},
];

const shiftData = [
    {id: 1, value: "Выберите смену"},
    {id: 2, value: "Смена 1"},
    {id: 3, value: "Смена 2"},
    {id: 4, value: "Смена 3"},
    {id: 5, value: "Смена 4"},
];

const appendOpt = () => {
    const getSelectCity = document.getElementById("city-select");
    const getSelectWorkShop = document.getElementById("workshop-select");
    const getSelectWorker = document.getElementById("worker-select");
    const getSelectBrigade = document.getElementById("brigade-select");
    const getSelectShift = document.getElementById("shift-select");
    cityArray.forEach(city => {
        let opt = document.createElement("option");
        opt.value = city.id;
        opt.innerHTML = city.cityName;
        getSelectCity.append(opt);
    });
    workshopData.forEach(workshop => {
        let opt = document.createElement("option");
        opt.value = workshop.id;
        opt.innerHTML = workshop.workShop;
        getSelectWorkShop.append(opt);
    });
    workerData.forEach(worker => {
        let opt = document.createElement("option");
        opt.value = worker.id;
        opt.innerHTML = worker.worker;
        getSelectWorker.append(opt);
    });
    brigadeData.forEach(brigade => {
        let opt = document.createElement("option");
        opt.value = brigade.id;
        opt.innerHTML = brigade.value;
        getSelectBrigade.append(opt);
    });
    shiftData.forEach(shift => {
        let opt = document.createElement("option");
        opt.value = shift.id;
        opt.innerHTML = shift.value;
        getSelectShift.append(opt);
    });
};

const updateWorkshops = () => {
    const workshopSelect = document.getElementById("workshop-select");
    const selectedCityId = document.getElementById("city-select").value;

    workshopSelect.innerHTML = "";


        workshopData.forEach(workshop => {
            let opt = document.createElement("option");
            opt.value = workshop.id; 
            opt.innerHTML = workshop.workShop; 
            if(workshop.cityId === Number(selectedCityId)){
                workshopSelect.append(opt);
            }
        });
    
    updateWorkers();
};

const updateWorkers = () => {
    const workerSelect = document.getElementById("worker-select");
    workerSelect.innerHTML = '';
    
    const selectedWorkshop = document.getElementById("workshop-select").value;

    workerData.forEach(worker => {
        let opt = document.createElement("option");
        opt.value = worker.id; 
        opt.innerHTML = worker.worker; 
        if(worker.workshop_id === Number(selectedWorkshop)){
            workerSelect.append(opt);
        }
    });
};

const saveInfo = () => {
    const getSelectCity = document.getElementById("city-select");
    const getSelectWorkShop = document.getElementById("workshop-select");
    const getSelectWorker = document.getElementById("worker-select");
    const getSelectBrigade = document.getElementById("brigade-select");
    const getSelectShift = document.getElementById("shift-select");
    const saveDate = {
        city: getSelectCity.value !== "1" ? getSelectCity.value : null,
        workShop: getSelectWorkShop.value !== "1" ? getSelectWorkShop.value : null,
        worker: getSelectWorker.value !== "1" ? getSelectWorker.value : null,
        brigade: getSelectBrigade.value !== "1" ? getSelectBrigade.value : null,
        shift: getSelectShift.value !== "1" ? getSelectShift.value : null
    };
    const cookieValue = JSON.stringify(saveDate);
    document.cookie = `saveDate=${cookieValue}; max-age=3600; path=/`;
};


appendOpt();
document.getElementById("city-select").addEventListener('change', updateWorkshops);
document.getElementById("workshop-select").addEventListener('change', updateWorkers);
