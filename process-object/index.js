const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i < 10000; i++){
    //looping ini akan buat penggunaan memori naik

}

const currentMemoryUsage = //
console.log(`hai ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);