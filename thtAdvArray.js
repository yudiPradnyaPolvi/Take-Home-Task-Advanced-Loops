console.log("Tugas Take Home Task - Advance Array")
const data = [
    {
        id: '5bd761dcae323e45a93ccfe8',
        saleDate: { $date: { $numberLong: '1427144809506' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '40.01' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '35.29' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '56.12' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '77.71' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '18.47' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '19.95' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '8.08' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '14.16' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '42' },
            email: 'cauho@witwuta.sv',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: true,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93ccfe9',
        saleDate: { $date: { $numberLong: '1440496862918' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '8.05' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '28.31' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '20.95' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '866.5' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '33.09' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '37.55' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '83.28' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '42.9' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '16.68' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '50' },
            email: 'keecade@hem.uy',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93ccfea',
        saleDate: { $date: { $numberLong: '1498125254185' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '30.08' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '24.68' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '32.1' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '31.41' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '43.56' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '68.95' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '8.57' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '106.6' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '596.33' },
                quantity: { $numberInt: '4' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '51' },
            email: 'worbiduh@vowbu.cg',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfeb',
        saleDate: { $date: { $numberLong: '1424685239343' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.08' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '23.08' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '82.73' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '15.98' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '27.24' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '27.7' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '59.86' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '27.33' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '13.59' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'F',
            age: { $numberInt: '45' },
            email: 'vatires@ta.pe',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfec',
        saleDate: { $date: { $numberLong: '1512326388253' } },
        items: [
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '127.59' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '17.6' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '18.67' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '60.56' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '28.41' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '15.28' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1259.02' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'M',
            age: { $numberInt: '40' },
            email: 'dotzu@ib.sh',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfed',
        saleDate: { $date: { $numberLong: '1441210319565' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '13.44' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '16.66' },
                quantity: { $numberInt: '10' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'M',
            age: { $numberInt: '44' },
            email: 'owtar@pu.cd',
            satisfaction: { $numberInt: '2' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfee',
        saleDate: { $date: { $numberLong: '1415672031893' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '604.12' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '11.05' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.94' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '61.16' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '29.81' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '31.19' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '47.12' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '36.71' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '69.28' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '14.05' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'F',
            age: { $numberInt: '40' },
            email: 'pan@cak.zm',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfef',
        saleDate: { $date: { $numberLong: '1396281726624' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '21.95' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.45' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '8.27' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '87.13' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '11.79' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '42.7' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '23.71' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '584.56' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '46.71' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '21.22' },
                quantity: { $numberInt: '10' },
            },
        ],
        storeLocation: 'Austin',
        customer: {
            gender: 'M',
            age: { $numberInt: '71' },
            email: 'man@bob.mz',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93ccff0',
        saleDate: { $date: { $numberLong: '1490061266657' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '16.97' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '11.92' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '565.42' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '12.83' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '11.82' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '24.57' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '36.13' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '14.44' },
                quantity: { $numberInt: '9' },
            },
        ],
        storeLocation: 'New York',
        customer: {
            gender: 'M',
            age: { $numberInt: '26' },
            email: 'rapifoozi@viupoen.bb',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: true,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccff1',
        saleDate: { $date: { $numberLong: '1408336646849' } },
        items: [
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '26.64' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1217.84' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '19.45' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '22.33' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '16.7' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '22.77' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '21.36' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '69.88' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '57' },
            email: 'ohaguwu@nufub.gi',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccff2',
        saleDate: { $date: { $numberLong: '1437808829804' } },
        items: [
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '75.21' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '61.11' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '17.2' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '37.41' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '43.63' },
                quantity: { $numberInt: '7' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'F',
            age: { $numberInt: '34' },
            email: 'keigutip@vaw.tc',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93ccff3',
        saleDate: { $date: { $numberLong: '1437533120727' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '21.46' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '21.82' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '34.43' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '24.11' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'F',
            age: { $numberInt: '49' },
            email: 'merto@betosiv.pm',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccff4',
        saleDate: { $date: { $numberLong: '1408358533935' } },
        items: [
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '187.16' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '20.61' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '23.75' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '9.44' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'San Diego',
        customer: {
            gender: 'F',
            age: { $numberInt: '59' },
            email: 'la@cevam.tj',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccff5',
        saleDate: { $date: { $numberLong: '1447610892414' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '644.76' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '24.4' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '9.22' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '83.27' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '66.73' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '18.87' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '55' },
            email: 'eja@ko.es',
            satisfaction: { $numberInt: '2' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93ccff6',
        saleDate: { $date: { $numberLong: '1503347914618' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '14.96' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1223.33' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '18.09' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '25.15' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '47.36' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '11.5' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '23.24' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '5.68' },
                quantity: { $numberInt: '8' },
            },
        ],
        storeLocation: 'San Diego',
        customer: {
            gender: 'F',
            age: { $numberInt: '36' },
            email: 'gul@waija.nz',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93ccff7',
        saleDate: { $date: { $numberLong: '1512769234527' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '806.84' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '10.63' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '38.37' },
                quantity: { $numberInt: '10' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '28' },
            email: 'fapra@rutes.tj',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93ccff8',
        saleDate: { $date: { $numberLong: '1377077767188' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '6.5' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '8.11' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '150.18' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.65' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '28.24' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '14.64' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '11.91' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '896.67' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '15.56' },
                quantity: { $numberInt: '4' },
            },
        ],
        storeLocation: 'New York',
        customer: {
            gender: 'F',
            age: { $numberInt: '53' },
            email: 'se@nacwev.an',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93ccff9',
        saleDate: { $date: { $numberLong: '1510518615045' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '9.91' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '22.01' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '57.14' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '21.92' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.12' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1541.76' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '45.86' },
                quantity: { $numberInt: '6' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'F',
            age: { $numberInt: '50' },
            email: 'velo@nukav.fr',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccffa',
        saleDate: { $date: { $numberLong: '1471233903298' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '862.74' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '5.04' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '11.61' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.83' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '18.72' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '116.93' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'San Diego',
        customer: {
            gender: 'F',
            age: { $numberInt: '40' },
            email: 'elusekjiv@kuajmag.as',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: true,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccffb',
        saleDate: { $date: { $numberLong: '1447711354415' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '17.3' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '23.36' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '21.53' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '57.02' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '14.04' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '32.2' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.2' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '37.37' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '34.61' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '102.7' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'New York',
        customer: {
            gender: 'F',
            age: { $numberInt: '39' },
            email: 'beecho@wic.be',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccffc',
        saleDate: { $date: { $numberLong: '1447329967052' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '16.82' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '142.9' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '9.05' },
                quantity: { $numberInt: '8' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '30' },
            email: 'ziguh@lu.bf',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccffd',
        saleDate: { $date: { $numberLong: '1438027546464' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '20.97' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '22.96' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '19.32' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '55.55' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '71.57' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '57.58' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '24.18' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '910.07' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '16.13' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '12.73' },
                quantity: { $numberInt: '10' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'F',
            age: { $numberInt: '31' },
            email: 'fimpig@an.is',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccffe',
        saleDate: { $date: { $numberLong: '1363797399112' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '25.83' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '14.6' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '7.49' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '149.09' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '898.84' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '21.01' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '21.06' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '21.48' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '39.38' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '13.07' },
                quantity: { $numberInt: '4' },
            },
        ],
        storeLocation: 'San Diego',
        customer: {
            gender: 'M',
            age: { $numberInt: '61' },
            email: 'ucikosusu@sid.uz',
            satisfaction: { $numberInt: '1' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93ccfff',
        saleDate: { $date: { $numberLong: '1475564684122' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.08' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '22.9' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '12.33' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1376.45' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '28.1' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'M',
            age: { $numberInt: '58' },
            email: 'jalpo@ha.mq',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd000',
        saleDate: { $date: { $numberLong: '1431697404561' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '47.95' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '35.27' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '542.81' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '13.76' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '95.65' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '13.77' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '5.87' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.68' },
                quantity: { $numberInt: '7' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'F',
            age: { $numberInt: '27' },
            email: 'zu@bainku.za',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd001',
        saleDate: { $date: { $numberLong: '1486642131353' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '30.6' },
                quantity: { $numberInt: '7' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '48' },
            email: 'avwa@ud.pt',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd002',
        saleDate: { $date: { $numberLong: '1429327989638' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1397.24' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '41.65' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '66.41' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '20.69' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '54.49' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.42' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '24.61' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '10.31' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '10.76' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '30.36' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'Austin',
        customer: {
            gender: 'F',
            age: { $numberInt: '37' },
            email: 'oh@ocdumvi.mq',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd003',
        saleDate: { $date: { $numberLong: '1459124832457' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '19.36' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '36.08' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '24.91' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '114.42' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '9.44' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '11.87' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '72.88' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'F',
            age: { $numberInt: '48' },
            email: 'jorcol@ir.se',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd004',
        saleDate: { $date: { $numberLong: '1499930023675' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '21.66' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '7.67' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '13.91' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'F',
            age: { $numberInt: '70' },
            email: 'wuulabeb@patsef.vu',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd005',
        saleDate: { $date: { $numberLong: '1463363360963' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '22.16' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1588.12' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '49' },
            email: 'me@lih.st',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93cd006',
        saleDate: { $date: { $numberLong: '1486379918404' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '26.15' },
                quantity: { $numberInt: '6' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '60' },
            email: 'du@il.ug',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd007',
        saleDate: { $date: { $numberLong: '1468143356729' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '15.74' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '40.38' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '46.9' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '440.97' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.91' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '60' },
            email: 'kege@nibomjo.gq',
            satisfaction: { $numberInt: '1' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd008',
        saleDate: { $date: { $numberLong: '1505386362206' } },
        items: [
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '41.78' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '38.93' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '70.71' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '23.63' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.77' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '17.4' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '9.99' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '13.32' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '10.02' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '52.35' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'F',
            age: { $numberInt: '54' },
            email: 'civma@rozfon.tr',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd009',
        saleDate: { $date: { $numberLong: '1446965958442' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '11.88' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '8.18' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '117.64' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '36.28' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '36.69' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '40.89' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'San Diego',
        customer: {
            gender: 'F',
            age: { $numberInt: '33' },
            email: 'ugmu@bekuba.tg',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd00a',
        saleDate: { $date: { $numberLong: '1427698745365' } },
        items: [
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '59.55' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '34.83' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '17.31' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '18.22' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '31.88' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '17.34' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '36.18' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '66' },
            email: 'henbaw@dasekoh.bf',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd00b',
        saleDate: { $date: { $numberLong: '1463370195808' } },
        items: [
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '72.32' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '796.74' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '14.38' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '158.88' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '6.96' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'F',
            age: { $numberInt: '26' },
            email: 'kupeen@gareha.ne',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: true,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd00c',
        saleDate: { $date: { $numberLong: '1476904359499' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '19.04' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '69.63' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '15.54' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '19.72' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '22.3' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '30.1' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '29.75' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '37.43' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'New York',
        customer: {
            gender: 'F',
            age: { $numberInt: '57' },
            email: 'cuwoik@luvgu.tc',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd00d',
        saleDate: { $date: { $numberLong: '1382207996083' } },
        items: [
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '66.04' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '35.46' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '21.2' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.12' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Austin',
        customer: {
            gender: 'F',
            age: { $numberInt: '64' },
            email: 'mucloji@popitdib.fi',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd00e',
        saleDate: { $date: { $numberLong: '1380554333756' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '39.91' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '27.87' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '13.54' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '5.43' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '16.15' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '40.01' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '13.37' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1597.31' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '30.99' },
                quantity: { $numberInt: '4' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'F',
            age: { $numberInt: '59' },
            email: 'veb@molog.eu',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd00f',
        saleDate: { $date: { $numberLong: '1461744598703' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '10.48' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '137.1' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '17.4' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '17.89' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '23.17' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '13.41' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '39.32' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'M',
            age: { $numberInt: '70' },
            email: 'nupettum@dovloc.id',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd010',
        saleDate: { $date: { $numberLong: '1473785682141' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '12.52' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '15.48' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '29.27' },
                quantity: { $numberInt: '4' },
            },
        ],
        storeLocation: 'San Diego',
        customer: {
            gender: 'F',
            age: { $numberInt: '70' },
            email: 'itene@jini.ir',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93cd011',
        saleDate: { $date: { $numberLong: '1477162244216' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '10.86' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'F',
            age: { $numberInt: '52' },
            email: 'nupzig@apubu.hu',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: true,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd012',
        saleDate: { $date: { $numberLong: '1456309373004' } },
        items: [
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '15.57' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'F',
            age: { $numberInt: '74' },
            email: 'wapunu@ba.bm',
            satisfaction: { $numberInt: '1' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd013',
        saleDate: { $date: { $numberLong: '1403156176228' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '15.9' },
                quantity: { $numberInt: '6' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '21.44' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '13.83' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '135.83' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '48.87' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1577.42' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '26.7' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '23.32' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '71.34' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'New York',
        customer: {
            gender: 'M',
            age: { $numberInt: '31' },
            email: 'do@neokliw.sz',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd014',
        saleDate: { $date: { $numberLong: '1433427866136' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '881.57' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '12.34' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '15.07' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'New York',
        customer: {
            gender: 'F',
            age: { $numberInt: '52' },
            email: 'citga@fo.pg',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93cd015',
        saleDate: { $date: { $numberLong: '1504298309109' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '30.95' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '52' },
            email: 'apokas@miz.tg',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd016',
        saleDate: { $date: { $numberLong: '1410215936461' } },
        items: [
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '10.8' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '8.84' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '28.98' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '16.68' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '16.31' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '25.61' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'F',
            age: { $numberInt: '29' },
            email: 'ti@zawpa.it',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd017',
        saleDate: { $date: { $numberLong: '1420973192673' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.02' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '18.69' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '49' },
            email: 'ce@jinsuod.sy',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: true,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd018',
        saleDate: { $date: { $numberLong: '1506587745703' } },
        items: [
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1531.69' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '37' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '25.02' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '17.1' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '6.1' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '5.65' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '10.6' },
                quantity: { $numberInt: '5' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'M',
            age: { $numberInt: '71' },
            email: 'ep@jedofi.gd',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93cd019',
        saleDate: { $date: { $numberLong: '1474180477325' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '31.54' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '40.69' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '5.62' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '17.68' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '21.1' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'F',
            age: { $numberInt: '37' },
            email: 'vo@fow.gq',
            satisfaction: { $numberInt: '1' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
];

//nomor 1
const dataBaru=data.map(function(d){
    const items =d.items.map(function(items1){
        return {
            name : items1.name,
            quantity:items1.quantity.$numberInt,
            price:items1.price.$numberDecimal,
        };
    });
    
    return {
        idTransaction : d.id, 
        storeLocation:d.storeLocation,
        userEmail:d.customer.email +"@gmail.com",
        purchaseMethod:d.purchaseMethod,
        items:items,
        /*
        nameProduct:d.items.name,
        quantityProduct:d.items.quantity,
        priceProduct:d.items.price,
        */

        
    };
});

console.log ("data Baru ", dataBaru)

// nomor 2
const storeLocation=data.map(function(d){
    const mrOrMiss=d.customer.gender === "M"?"Mr.":"Miss"
    let username= d.customer.email.split("@")
    username =username [0]

    return {
        id : d.id, 
        storeLocation:d.storeLocation,
        customerEmail:d.customer.email +"@gmail.com",
        customerUsername : `${mrOrMiss} ${username}`
    };
});
const  storeLocationAtDenver = storeLocation.filter (function(d){
    return d.storeLocation == "Denver"
})

console.log(storeLocationAtDenver)
const  storeLocationAtSeattle = storeLocation.filter (function(d){
    return d.storeLocation == "Seattle"
})
console.log(storeLocationAtSeattle)

// nomor  3
const keuntunganTransaksi= data.map(function(d){
    
    const items =d.items.map(function(items){
        let keuntungans = items.price.$numberDecimal * items.quantity.$numberInt
        
        return {
            name : items.name,
            quantity:items.quantity.$numberInt,
            price:items.price.$numberDecimal,
            Keuntungans:keuntungans,
        };
    }); 
    return {
        idTransaction : d.id, 
        storeLocation:d.storeLocation,
        userEmail:d.customer.email +"@gmail.com",
        purchaseMethod:d.purchaseMethod,
        items:items,

    }
});
console.log ("Keuntungan Setiap Transaksi ", keuntunganTransaksi)

// nomor 4
const jumlahBarang= data.map(function(d){
    
    const items =d.items.map(function(items){
       
        
        return {
            name : items.name,
            quantity:items.quantity.$numberInt,
           
        };
    }); 
    return {
        idTransaction : d.id, 
        storeLocation:d.storeLocation,
        purchaseMethod:d.purchaseMethod,
        items:items,
  
    }
  });
  console.log ("Jumlah Barang yang dibeli ", jumlahBarang)

  // nomor 5
  const rating= data.map(function(d){

    return {
        idTransaction : d.id, 
        storeLocation:d.storeLocation,
        satisfactions:d.customer.satisfaction.$numberInt,
  
    }
  });
  console.log ("Rating setiap toko ", rating)

//nomor 6
const storeLocations=data.map(function(d){
    const items =d.items.map(function(items){
        let keuntungans = items.price.$numberDecimal * items.quantity.$numberInt
        
        return {
            name : items.name,
            quantity:items.quantity.$numberInt,
            price:items.price.$numberDecimal,
            Keuntungans:keuntungans,
        };
    }); 
  
  
    return {
        id : d.id, 
        storeLocations:d.storeLocation,
        items : items[0]
        
        
    };
  });
  const  storeLocationAtDenvers= storeLocation.filter (function(d){
    return d.storeLocation == "Denver"
  })
  
  console.log(storeLocationAtDenvers)
  const  storeLocationAtSeattles = storeLocation.filter (function(d){
    return d.storeLocation == "Seattle"
  })
  console.log(storeLocationAtSeattles)