const doctors = [
    { id: 1, name: "Benedict Cumberbatch", specialization: "Therapist", email: "Benedict@gmail.com", phone: "0959423146" },
    { id: 2, name: "Harry Styles", specialization: "Therapist", email: "Harry@gmail.com", phone: "0959423146" },
    { id: 3, name: "John Dorian", specialization: "Therapist", email: "John@gmail.com", phone: "0959423146" },
];
const assistants = [
    { id: 1, name: "Alex Sample", email: "Alex@gmail.com", phone: "0959423146" },
    { id: 2, name: "Mango Sample", email: "Mango@gmail.com", phone: "0959423146" },
    { id: 3, name: "Josh Sample", email: "Josh@gmail.com", phone: "0959423146" },
];
const receptionists = [
    { id: 1, name: "Alex Sample", email: "Alex@gmail.com", phone: "0959423146" },
    { id: 2, name: "Mango Sample", email: "Mango@gmail.com", phone: "0959423146" },
    { id: 3, name: "Josh Sample", email: "Josh@gmail.com", phone: "0959423146" },
];
const rooms = [
    { id: 1, name: "1a", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 2, name: "1b", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 3, name: "1c", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 4, name: "1d", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 5, name: "2a", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 6, name: "2b", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 7, name: "2c", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 8, name: "2d", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 9, name: "3a", timeStatus: "", status: "", assignedDoctorId: 3 },
    { id: 10, name: "3b", timeStatus: "", status: "", assignedDoctorId: 3 },
    { id: 11, name: "3c", timeStatus: "", status: "", assignedDoctorId: 3 },
    { id: 12, name: "3d", timeStatus: "", status: "", assignedDoctorId: 3 },
]
const alerts = [
    { id: 1, name: "Doctor in", color: "", Role: "" }
];


const createDoctor = (doctor) => {
    const id = doctors.length + 1;
    return {
        id, ...doctor
    };
};
const createAssistant = (assistant) => {
    const id = assistant.length + 1;
    return {
        id, ...assistant
    };
};
const createReceptionist = (receptionist) => {
    const id = receptionist.length + 1;
    return {
        id, ...receptionist
    };
};

const resolvers = {
    Query: {
        getDoctorRooms: ({ id }) => {
            return rooms.filter(room => room.assignedDoctorId == id);
        },
        getAllDoctors: () => {
            return doctors
        },
        getDoctor: ({ id }) => {
            return doctors.find(doctor => doctor.id == id)
        },
        getAllReceptionists: () => {
            return receptionists
        },
        getReceptionist: ({ id }) => {
            return receptionists.find(receptionist => receptionist.id == id)
        },
        getAllAssistants: () => {
            return assistants
        },
        getAssistant: ({ id }) => {
            return assistants.find(assistant => assistant.id == id)
        },
        getAllRooms: () => {
            return rooms;
        }
    },

    Mutation: {
        createDoctor: ({ doctor }) => {
            const doc = createDoctor(doctor)
            doctors.push(doc)
            return doc
        },
        deleteDoctor: ({ id }) => {
            return doctors.find(doctor => doctor.id !== id)
        },

        createAssistant: ({ assistant }) => {
            const assist = createAssistant(assistant)
            assistants.push(assist)
            return assist
        },
        deleteAssistant: ({ id }) => {
            return assistants.find(assistant => assistant.id !== id)
        },

        createDoctor: ({ receptionist }) => {
            const recept = createReceptionist(receptionist)
            receptionists.push(recept)
            return recept
        },
        deleteReceptionist: (_, { receptionistId }) => {
            console.log(receptionistId)
            return receptionists.filter(receptionist => receptionist.id !== +receptionistId);
        },
        assignRoom: (room) => {
            console.log(room, "This")
        }
    },
    Doctor: {
        rooms: ({ id, ...props }, args, context) => {
            return rooms.filter(room => room.assignedDoctorId === +id);
        },
    },
    Room: {
        assignedDoctor: (data) => {
            return doctors.find(el => el.id === data.assignedDoctorId)
        }
    }
}

module.exports = { resolvers }