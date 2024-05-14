export type CategoryKey = 'accessories' | 'tops' | 'bottoms';

const categoryConfig: { [key in CategoryKey]: { male: string[]; female: string[] } } = {
    accessories: {
        male: ['Accessoires', 'WCA02305', 'WCA02306', 'WCA02304', 'WCA02303', 'WCA02308', 'WCA02309', 'WCA02307', 'WCA02301', 'WCA02302'],
        female: ['Accessoires', 'WCA01156', 'WCA01159', 'WCA01155', 'WCA01152', 'WCA01158', 'WCA01153', 'WCA01157', 'WCA01154']
    },
    tops: {
        male: [
            'T-Shirts', 'WCA00221', 'WCA00223', 'WCA00222', 'WCA00220',
            'Hemden', 'WCA02211'
        ],
        female: [
            'tops_t-shirts', 'WCA00111', 'WCA00112', 'WCA00110',
            'Blusen', 'WCA00122', 'WCA00121'
        ]
    },
    bottoms: {
        male: [
            'Hosen', 'WCA02252', 'WCA02251', 'WCA02253',
            'denim', 'WCA02246', 'WCA02242', 'WCA02241', 'WCA02243', 'WCA02245', 'WCA02244'
        ],
        female: [
            'Hosen', 'WCA00172', 'WCA00173', 'WCA00171',
            'roecke', 'WCA00161', 'WCA00162', 'WCA00163'
        ]
    }
};

export default categoryConfig;
