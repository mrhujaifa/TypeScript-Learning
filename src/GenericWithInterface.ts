//?=========> Generics with interface ts <==========

// Interface system

interface Developer<T, B = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: B;
}

// Generics system example
const RichDeveloper: Developer<{
  heartRate: string; // change genericaly type
  stopwatch: boolean;
  AiSysten: boolean;
}> = {
  name: "Mr rich",
  salary: 2000000,
  device: {
    brand: "iPhone",
    model: "ios4",
    releasedYear: "2025",
  },
  smartWatch: {
    // change dynamic system use Generics type
    heartRate: "85 bpm",
    stopwatch: true,
    AiSysten: true,
  },
};

// clear code use interface / alias
interface PoorWatch {
  heartRate: string;
  stopwatch: boolean;
}
const PoorDeveloper: Developer<PoorWatch> = {
  name: "Mr poor",
  salary: 30000,
  device: {
    brand: "MIUI",
    model: "id3os4",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "85 bpm",
    stopwatch: true,
  },
};

//* How to use multiple generics for ts interface
interface PoorWatch {
  heartRate: string;
  stopwatch: boolean;
}

interface PoorBike {
  name: string;
  model: string;
}
const PoorDeveloper2: Developer<PoorWatch, PoorBike> = {
  name: "Mr poor",
  salary: 30000,
  device: {
    brand: "MIUI",
    model: "id3os4",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "85 bpm",
    stopwatch: true,
  },
  bike: {
    name: "suzuki sf",
    model: "not model",
  },
};
