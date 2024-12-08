export default function PageGenap(){
    return (
        <div>
            <header className="flex justify-between items-center p-2 mx-auto bg-amber-200 text-gray-800">
                <img src="\logoCB.svg" alt="logo Cendika Bangsa" className="w-1/6" />
                <nav>
                    <ul className="flex space-x-4 font-semibold">
                        <li><a href="#profil">Profil</a></li>
                        <li><a href="#program">Program</a></li>
                        <li><a href="#daftar">Daftar</a></li>
                    </ul>
                </nav>
            </header>

            <section className="h-96" id="hero">
                <div className="size-full flex flex-col gap-y-4 items-center justify-center text-center bg-amber-200 text-gray-800">
                    <h1 className="font-bold text-5xl w-1/2">Desain Komunikasi Visual</h1>
                    <p>
                        Memajukan era digitalisasi segmen pasar di Indonesia melalui pengembangan ide visual pada sektor industri
                    </p>
                    <a href="profil" className="py-2 px-6 bg-slate-800 text-white rounded-sm font-semibold"> Baca Selengkapnya</a>
                </div>
            </section>

            <section className="items-center justify-center flex flex-row" id="profil">
                <div className="w-[60%] gap-y-12 pt-6 p-4 flex flex-col">
                    <h2 className="text-gray-950 font-bold text-3xl">
                        Profil Desain Komunikasi Visual
                    </h2>
                    <p className="text-justify">
                        Jurusan Desain Komunikasi Visual (DKV) merupakan bidang studi yang fokus pada pengembangan kreativitas dalam menyampaikan pesan secara visual. Melalui kombinasi elemen-elemen seperti desain grafis, ilustrasi, fotografi, dan multimedia, mahasiswa DKV mempelajari cara-cara untuk menyampaikan ide dan pesan secara efektif kepada khalayak menggunakan elemen-elemen visual.
                    </p>
                    <p className="text-justify">
                        Selama studi, mahasiswa DKV belajar konsep-konsep dasar desain seperti tipografi, komposisi, warna, dan penggunaan software desain terkini. Mereka juga mempelajari teknik-teknik produksi media seperti cetak, digital, hingga desain untuk media interaktif. Selain itu, pembelajaran dalam bidang branding, periklanan, serta strategi komunikasi visual juga menjadi bagian integral dari kurikulum DKV.    
                    </p>
                    <p className="text-justify">
                        Manfaat dari studi DKV sangat luas. Pertama, mahasiswa DKV mengembangkan keterampilan desain yang sangat dicari di berbagai industri, seperti periklanan, penerbitan, perusahaan teknologi, dan hiburan. Mereka juga dapat menjadi penggerak utama dalam komunikasi visual yang kuat, membantu organisasi atau perusahaan menyampaikan pesan mereka dengan lebih efektif kepada khalayak. Selain itu, melalui penguasaan teknologi dan pemahaman desain, lulusan DKV memiliki fleksibilitas untuk berkarier sebagai desainer grafis, ilustrator, animator, art director, atau bahkan menjelajahi bidang-bidang baru yang terkait dengan desain visual dan komunikasi.
                    </p>
                </div>
                <div className="w-[30%] items-center justify-center">
                    <img src="\TLNT_DKV.png" alt="siswa TKJ" className="w-[85%] h-auto" />
                </div>
            </section>
            
            <div className="h-46 items-center justify-between flex fl-row" id="program">
                <div className="size-full p-8 items-center flex flex-col gap-y-4 bg-amber-200 text-gray-800">
                    <h1 className="text-2xl font-bold">Program Pembelajaran</h1>
                    <div className="flex flex-row gap-x-12 text-lg">
                        <ul className="list-disc">
                            <li>Desain Grafis</li>
                            <li>Desain Illustrasi</li>
                            <li>Desain Produk</li>
                        </ul>

                        <ul className="list-disc">
                            <li>Fotografi</li>
                            <li>Videografi</li>
                            <li>Animasi</li>
                        </ul>
                    </div>
                    
                </div> 
            </div>

            <section className="items-center justify-center flex px-12" id="daftar">
                <div className="w-[40%]">
                    <img src="\cs.png" alt="siswa TKJ" className="w-full" />
                </div>

                <div className=" w-[60%] flex flex-col items-start justify-start p-6">
                    <h2 className="text-gray-950 font-bold text-4xl">
                        Daftar Sekarang!
                    </h2>
                    <p className="text-lg">hubungi : </p>
                    <p className="text-lg font-semibold">0341 - 391 450</p>
                </div>
                
            </section>

            <footer className="h-12 bg-amber-200 text-gray-800 items-center justify-center p-2">
                <p className="text-center text-sm">Landing Page ini dibuat untuk praktik kelas X TKJ SMK Cendika Bangsa</p>
                <p className="text-center text-sm">dibuat oleh: Nama Kalian - Jurusan</p>
            </footer>


        </div>
    );
}