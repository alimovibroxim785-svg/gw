/**
 * WO & MAN СТУДИЯ КРАСОТЫ - DATA STORAGE & MANAGEMENT SYSTEM (v3)
 * Erkaklar (Barbershop) va Ayollar (Beauty Studio) xizmatlari va ustalarini boshqarish.
 */

const STORAGE_KEYS = {
    APPOINTMENTS: 'woman_appointments_v3',
    SERVICES: 'woman_services_v4',
    BARBERS: 'woman_masters_v3',
    SETTINGS: 'woman_settings_v3',
    AUTH: 'woman_admin_auth_v3'
};

// Dastlabki ustalar (Erkaklar va Ayollar ustalari)
const DEFAULT_BARBERS = [
    {
        id: 'm1',
        name: 'Azizbek Rahimov',
        gender: 'male',
        role: 'Top Barber & Erkaklar Stilisti',
        experience: '7 yil tajriba',
        rating: 4.9,
        phone: '+998 90 123 45 67',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        specialties: ['Fade soch turmagi', 'Soqol dizayni', 'Klassik uslub'],
        status: 'active'
    },
    {
        id: 'w1',
        name: 'Dilnoza Karimova',
        gender: 'female',
        role: 'Top Kolorist & Ayollar Stilisti',
        experience: '8 yil tajriba',
        rating: 5.0,
        phone: '+998 93 777 11 22',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        specialties: ['AirTouch & Balayaj', 'Kreativ turmaklar', 'Soch davolash'],
        status: 'active'
    },
    {
        id: 'm2',
        name: 'Jasur Mirzayev',
        gender: 'male',
        role: 'Senior Barber',
        experience: '5 yil tajriba',
        rating: 4.8,
        phone: '+998 91 987 65 43',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        specialties: ['Soqol tekislash', 'Hot Towel Shave', 'Soch kamuflyaji'],
        status: 'active'
    },
    {
        id: 'w2',
        name: 'Madina Usmonova',
        gender: 'female',
        role: 'Professional Vizajist & Makiyaj',
        experience: '6 yil tajriba',
        rating: 4.9,
        phone: '+998 97 555 88 99',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
        specialties: ['Kechki va to\'y makiyaji', 'Lifting', 'Qosh laminatsiyasi'],
        status: 'active'
    },
    {
        id: 'm3',
        name: 'Bobur Aliyev',
        gender: 'male',
        role: 'Erkaklar Stilisti & Barber',
        experience: '4 yil tajriba',
        rating: 4.8,
        phone: '+998 94 333 44 55',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        specialties: ['Bolalar sochi', 'Kreativ chiziqlar'],
        status: 'active'
    },
    {
        id: 'w3',
        name: 'Shahlo Rahimova',
        gender: 'female',
        role: 'Nail Master & Kosmetolog',
        experience: '5 yil tajriba',
        rating: 4.9,
        phone: '+998 99 888 77 66',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        specialties: ['Apparatli manikür', 'Smart pedikür', 'Gel-lak'],
        status: 'active'
    }
];

// Dastlabki xizmatlar
const DEFAULT_SERVICES = [
    {
        id: 'sm1',
        gender: 'male',
        title: "Soch olish",
        category: "Soch olish",
        price: 60000,
        duration: '40 daqiqa',
        description: "Zamonaviy fade yoki klassik uslub, bosh yuvish va styling bilan.",
        popular: true
    },
    {
        id: 'sm2',
        gender: 'male',
        title: "Soch + soqol",
        category: "Kompleks",
        price: 100000,
        duration: '60 daqiqa',
        description: "To'liq soch olish va soqol parvarishi - bitta kompleksda.",
        popular: true
    },
    {
        id: 'sm3',
        gender: 'male',
        title: "Detskiy (bolalar soch turmagi)",
        category: "Bolalar",
        price: 50000,
        duration: '30 daqiqa',
        description: "12 yoshgacha bolalar uchun xavfsiz va chiroyli soch turmagi.",
        popular: false
    },
    {
        id: 'sw1',
        gender: 'female',
        title: "Ukladka",
        category: "Styling",
        price: 50000,
        duration: '50 daqiqa',
        description: "Sochni hajmli qilib shakllantirish va ukladka.",
        popular: false
    },
    {
        id: 'sw2',
        gender: 'female',
        title: "Soch bo'yash",
        category: "Bo'yash",
        price: 50000,
        duration: '60 daqiqa',
        description: "To'liq yoki qisman bo'yash, yorqin va bir xil rang.",
        popular: false
    },
    {
        id: 'sm4',
        gender: 'male',
        title: "Soqol",
        category: "Soqol",
        price: 40000,
        duration: '30 daqiqa',
        description: "Ustarada shakllantirish, kontur va parvarishlovchi vositalar.",
        popular: true
    },
    {
        id: 'sm5',
        gender: 'male',
        title: "Vosk",
        category: "Depilyatsiya",
        price: 30000,
        duration: '20 daqiqa',
        description: "Quloq va burun uchun vosk bilan nozik tozalash.",
        popular: false
    },
    {
        id: 'sm6',
        gender: 'male',
        title: "Maska",
        category: "Parvarish",
        price: 40000,
        duration: '20 daqiqa',
        description: "Tozalovchi va namlantiruvchi yuz maskasi.",
        popular: false
    },
    {
        id: 'sm7',
        gender: 'male',
        title: "Massaj golovi",
        category: "Massaj",
        price: 50000,
        duration: '20 daqiqa',
        description: "Bosh terisini bo'shashtiruvchi relaks massaj.",
        popular: false
    },
    {
        id: 'sm8',
        gender: 'male',
        title: "Kuyov obraz",
        category: "VIP",
        price: 400000,
        duration: '90 daqiqa',
        description: "Kuyov uchun to'liq tayyorgarlik: soch, soqol va styling.",
        popular: true
    }
];

// Dastlabki namunaviy arizalar
const DEFAULT_APPOINTMENTS = [
    {
        id: 'WM-2081',
        clientName: 'Shoxrux Bekmurodov',
        clientPhone: '+998 90 777 88 99',
        gender: 'male',
        barberId: 'm1',
        barberName: 'Azizbek Rahimov',
        serviceIds: ['sm1', 'sm2'],
        serviceNames: 'Erkaklar soch turmagi, Soqol shakllantirish',
        totalPrice: 130000,
        date: new Date().toISOString().split('T')[0],
        time: '14:00',
        comment: 'To\'y uchun maxsus turmak.',
        status: 'pending',
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
    },
    {
        id: 'WM-2080',
        clientName: 'Nilufar Yusupova',
        clientPhone: '+998 93 555 44 33',
        gender: 'female',
        barberId: 'w1',
        barberName: 'Dilnoza Karimova',
        serviceIds: ['sw1', 'sw3'],
        serviceNames: 'Ayollar soch turmagi, Kechki Makiyaj',
        totalPrice: 280000,
        date: new Date().toISOString().split('T')[0],
        time: '16:30',
        comment: 'Kechki ziyofatga tayyorgarlik.',
        status: 'confirmed',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
    }
];

// Dastlabki sozlamalar
const DEFAULT_SETTINGS = {
    salonName: 'WO & MAN Студия Красоты',
    phone: '+998 97 977 5994',
    address: 'Toshkent shahri, Chilonzor tumani, Bunyodkor shoh ko\'chasi 42-uy',
    workingHours: 'Har kuni: 09:00 - 21:00',
    adminPassword: 'admin',
    telegramBotToken: '',
    telegramChatId: '',
    soundEnabled: true
};

class BarberDB {
    constructor() {
        this.init();
    }

    init() {
        try {
            // Ustalar
            const currentBarbers = localStorage.getItem(STORAGE_KEYS.BARBERS);
            if (!currentBarbers || JSON.parse(currentBarbers).length === 0) {
                localStorage.setItem(STORAGE_KEYS.BARBERS, JSON.stringify(DEFAULT_BARBERS));
            }

            // Xizmatlar
            const currentServices = localStorage.getItem(STORAGE_KEYS.SERVICES);
            if (!currentServices || JSON.parse(currentServices).length === 0) {
                localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(DEFAULT_SERVICES));
            }

            // Arizalar
            if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) {
                localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(DEFAULT_APPOINTMENTS));
            }

            // Sozlamalar
            if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
                localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
            }
        } catch (e) {
            console.error("DB Init xatolik:", e);
        }
    }

    // --- USTALAR ---
    getBarbers(gender = 'all') {
        try {
            let list = JSON.parse(localStorage.getItem(STORAGE_KEYS.BARBERS));
            if (!list || !Array.isArray(list) || list.length === 0) {
                list = DEFAULT_BARBERS;
                localStorage.setItem(STORAGE_KEYS.BARBERS, JSON.stringify(DEFAULT_BARBERS));
            }

            // Har bir ustada gender bo'lishini ta'minlash
            list = list.map(b => {
                if (!b.gender) {
                    b.gender = (b.name && (b.name.includes('Dilnoza') || b.name.includes('Madina') || b.name.includes('Shahlo') || b.id.startsWith('w'))) ? 'female' : 'male';
                }
                return b;
            });

            if (!gender || gender === 'all') return list;
            const filtered = list.filter(b => b.gender === gender);
            // Agar filtrlash natijasida bo'sh kelsa, ustalar yo'qolib qolmasligi uchun listni qaytaramiz
            return filtered.length > 0 ? filtered : list;
        } catch (e) {
            return DEFAULT_BARBERS;
        }
    }

    saveBarber(barber) {
        const barbers = this.getBarbers('all');
        if (barber.id) {
            const index = barbers.findIndex(b => b.id === barber.id);
            if (index !== -1) barbers[index] = barber;
        } else {
            barber.id = (barber.gender === 'female' ? 'w_' : 'm_') + Date.now();
            barbers.push(barber);
        }
        localStorage.setItem(STORAGE_KEYS.BARBERS, JSON.stringify(barbers));
        return barber;
    }

    deleteBarber(id) {
        let barbers = this.getBarbers('all').filter(b => b.id !== id);
        localStorage.setItem(STORAGE_KEYS.BARBERS, JSON.stringify(barbers));
    }

    // --- XIZMATLAR ---
    getServices(gender = 'all') {
        try {
            let list = JSON.parse(localStorage.getItem(STORAGE_KEYS.SERVICES));
            if (!list || !Array.isArray(list) || list.length === 0) {
                list = DEFAULT_SERVICES;
                localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(DEFAULT_SERVICES));
            }

            list = list.map(s => {
                if (!s.gender) {
                    s.gender = (s.id && s.id.startsWith('sw')) ? 'female' : 'male';
                }
                return s;
            });

            if (!gender || gender === 'all') return list;
            const filtered = list.filter(s => s.gender === gender);
            return filtered.length > 0 ? filtered : list;
        } catch (e) {
            return DEFAULT_SERVICES;
        }
    }

    saveService(service) {
        const services = this.getServices('all');
        if (service.id) {
            const index = services.findIndex(s => s.id === service.id);
            if (index !== -1) services[index] = service;
        } else {
            service.id = (service.gender === 'female' ? 'sw_' : 'sm_') + Date.now();
            services.push(service);
        }
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
        return service;
    }

    deleteService(id) {
        let services = this.getServices('all').filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    }

    // --- ARIZALAR ---
    getAppointments() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) || [];
        } catch (e) {
            return [];
        }
    }

    createAppointment(data) {
        const appointments = this.getAppointments();
        const newApp = {
            id: 'WM-' + Math.floor(1000 + Math.random() * 9000),
            clientName: (data.clientName || '').trim(),
            clientPhone: (data.clientPhone || '').trim(),
            gender: data.gender || 'male',
            barberId: data.barberId || '',
            barberName: data.barberName || 'Tanlanmagan usta',
            serviceIds: data.serviceIds || [],
            serviceNames: data.serviceNames || '',
            totalPrice: Number(data.totalPrice) || 0,
            date: data.date,
            time: data.time,
            comment: data.comment ? data.comment.trim() : '',
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        appointments.unshift(newApp);
        localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));

        this.notifyTelegram(newApp);
        return newApp;
    }

    updateAppointmentStatus(id, newStatus) {
        const appointments = this.getAppointments();
        const app = appointments.find(a => a.id === id);
        if (app) {
            app.status = newStatus;
            localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
            return true;
        }
        return false;
    }

    deleteAppointment(id) {
        let appointments = this.getAppointments().filter(a => a.id !== id);
        localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
    }

    // --- SOZLAMALAR ---
    getSettings() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS)) || DEFAULT_SETTINGS;
        } catch (e) {
            return DEFAULT_SETTINGS;
        }
    }

    saveSettings(newSettings) {
        const current = this.getSettings();
        const updated = { ...current, ...newSettings };
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
        return updated;
    }

    // --- TELEGRAM ---
    async notifyTelegram(appointment) {
        const settings = this.getSettings();
        if (!settings.telegramBotToken || !settings.telegramChatId) {
            return false;
        }

        const icon = appointment.gender === 'female' ? '🌸' : '💈';
        const typeLabel = appointment.gender === 'female' ? 'Ayollar bo\'limi' : 'Erkaklar bo\'limi';

        const text = `${icon} <b>YANGI ARIZA! WO & MAN СТУДИЯ КРАСОТЫ</b>\n\n` +
            `🆔 <b>Raqam:</b> ${appointment.id}\n` +
            `📂 <b>Bo'lim:</b> ${typeLabel}\n` +
            `👤 <b>Mijoz:</b> ${appointment.clientName}\n` +
            `📞 <b>Telefon:</b> ${appointment.clientPhone}\n` +
            `✂️ <b>Usta:</b> ${appointment.barberName}\n` +
            `📋 <b>Xizmat:</b> ${appointment.serviceNames}\n` +
            `💵 <b>Summa:</b> ${formatPrice(appointment.totalPrice)}\n` +
            `📅 <b>Sana & Vaqt:</b> ${appointment.date} soat ${appointment.time}\n` +
            (appointment.comment ? `💬 <b>Izoh:</b> ${appointment.comment}\n` : '') +
            `\n<i>Admin panel orqali tasdiqlang!</i>`;

        try {
            const url = `https://api.telegram.org/bot${settings.telegramBotToken}/sendMessage`;
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: settings.telegramChatId,
                    text: text,
                    parse_mode: 'HTML'
                })
            });
            return res.ok;
        } catch (err) {
            return false;
        }
    }

    resetToDefaults() {
        localStorage.setItem(STORAGE_KEYS.BARBERS, JSON.stringify(DEFAULT_BARBERS));
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(DEFAULT_SERVICES));
        localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(DEFAULT_APPOINTMENTS));
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
    }
}

function formatPrice(num) {
    if (!num) return "0 so'm";
    return Number(num).toLocaleString('uz-UZ') + " so'm";
}

function playNotificationSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
}

window.BarberDB = new BarberDB();
