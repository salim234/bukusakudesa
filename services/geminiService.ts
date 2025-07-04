
import { MOCK_LEARNING_CONTENT, MOCK_DRAFT_CONTENT, MOCK_QUIZZES, MOCK_GLOSSARY_TERMS } from '../mockdata.ts';
import { Quiz, GlossaryTerm } from '../types.ts';

/**
 * Helper function to simulate network delay, making the UI feel more responsive.
 * @param ms Milliseconds to wait.
 */
const simulateDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

/**
 * Fetches learning content from the mock data source.
 * @param prompt The prompt (used as a key) to find the content.
 * @returns A promise that resolves with the content as a string.
 */
export async function generateLearningContent(prompt: string): Promise<string> {
  await simulateDelay(500); // Simulate network latency
  const content = MOCK_LEARNING_CONTENT.get(prompt);
  if (content) {
    return content;
  }
  return "Error: Konten tidak ditemukan. Data tiruan ini mungkin tidak lengkap.";
}

/**
 * Fetches a draft example from the mock data source.
 * @param prompt The prompt (used as a key) to find the draft.
 * @returns A promise that resolves with the draft content as a string.
 */
export async function generateDraftExample(prompt:string): Promise<string> {
  await simulateDelay(700); // Simulate network latency
  const draft = MOCK_DRAFT_CONTENT.get(prompt);
  if (draft) {
    return draft;
  }
  return "Error: Contoh draf tidak ditemukan. Data tiruan ini mungkin tidak lengkap.";
}


/**
 * Fetches a search response from a predefined set of mock answers.
 * @param query The user's search query.
 * @returns A promise that resolves with the answer as a string.
 */
export async function generateSearchResponse(query: string): Promise<string> {
    await simulateDelay(600);
    const lowerCaseQuery = query.toLowerCase();

    if (lowerCaseQuery.includes('sumber pendapatan desa') || lowerCaseQuery.includes('pendapatan')) {
      return `
### Sumber Pendapatan Desa (Data Tiruan)
Berdasarkan peraturan yang berlaku, sumber-sumber pendapatan desa meliputi:
1.  **Pendapatan Asli Desa (PADesa)**, yang terdiri dari hasil usaha (BUMDes), hasil aset (sewa tanah kas desa), swadaya, dan lain-lain.
2.  **Alokasi Anggaran Pendapatan dan Belanja Negara (APBN)** atau Dana Desa.
3.  **Bagian dari hasil pajak dan retribusi daerah** Kabupaten/Kota.
4.  **Alokasi Dana Desa (ADD)** dari dana perimbangan Kabupaten/Kota.
5.  **Bantuan keuangan** dari APBD Provinsi dan Kabupaten/Kota.
6.  **Hibah dan sumbangan** pihak ketiga yang tidak mengikat.

*Catatan: Jawaban ini dihasilkan dari data tiruan untuk demonstrasi.*
      `;
    }

    if (lowerCaseQuery.includes('tugas bpd') || lowerCaseQuery.includes('badan permusyawaratan desa')) {
         return `
### Tugas Badan Permusyawaratan Desa (BPD) (Data Tiruan)
BPD memiliki tiga fungsi utama:
- Membahas dan menyepakati Rancangan Peraturan Desa bersama Kepala Desa.
- Menampung dan menyalurkan aspirasi masyarakat Desa.
- Melakukan pengawasan kinerja Kepala Desa.

*Catatan: Jawaban ini dihasilkan dari data tiruan untuk demonstrasi.*
         `;
    }

    return `Error: Tidak ditemukan jawaban untuk "${query}". Fitur pencarian ini menggunakan data tiruan dengan cakupan terbatas.`;
}

/**
 * Fetches quiz data from the mock data source.
 * @param quizId The ID of the quiz to fetch.
 * @returns A promise that resolves with the quiz data or null if not found.
 */
export async function getQuizData(quizId: string): Promise<Quiz | null> {
    await simulateDelay(400); // Simulate network latency
    const quiz = MOCK_QUIZZES.get(quizId);
    if (quiz) {
        return quiz;
    }
    throw new Error("Kuis tidak ditemukan. Data tiruan ini mungkin tidak lengkap.");
}


/**
 * Fetches the full list of glossary terms from the mock data source.
 * @returns A promise that resolves with an array of glossary terms.
 */
export async function getGlossaryTerms(): Promise<GlossaryTerm[]> {
    await simulateDelay(300); // Simulate network latency
    if (MOCK_GLOSSARY_TERMS) {
        return MOCK_GLOSSARY_TERMS;
    }
    throw new Error("Glosarium tidak dapat dimuat. Data tiruan tidak ditemukan.");
}
