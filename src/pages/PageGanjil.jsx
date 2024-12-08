export default function PageGanjil(goToHome) {
    return (
        <div>
            <header className="flex justify-between items-center p-2 mx-auto bg-rose-950 text-white">
                <img src="\logoCB white.svg" alt="logo Cendika Bangsa" className="w-1/6" />
                <nav>
                    <ul className="flex space-x-4 font-semibold">
                        <li><a href="profil">Profil</a></li>
                        <li><a href="#">Program</a></li>
                        <li><a href="#">Daftar</a></li>
                    </ul>
                </nav>
            </header>

            <section className="h-96" id="hero">
                <div className="size-full flex flex-col gap-y-4 items-center justify-center text-center bg-rose-950 text-white">
                    <h1 className="font-bold text-5xl w-1/2">Teknik Komputer & Jaringan</h1>
                    <p>
                        Bersama membangun masa depan dengan teknologi terbarukan dan mengedepankan hak-hak lingkungan.
                    </p>
                    <a href="profil" className="py-2 px-6 bg-amber-100 text-gray-900 rounded-sm font-semibold"> Baca Selengkapnya</a>
                </div>
            </section>

            <section className="items-center justify-center flex flex-row" id="profil">
                <div className="w-[60%] gap-y-12 pt-6 p-4 flex flex-col">
                    <h2 className="text-gray-950 font-bold text-3xl">
                        Profil Teknik Komputer & Jaringan
                    </h2>
                    <p className="text-justify">
                        Jurusan Teknik Komputer dan Jaringan adalah salah satu jurusan di bidang teknologi informatika yang ditemui di berbagai sekolah menengah kejuruan, termasuk di SMK Cendika Bangsa. Jurusan ini menawarkan pendidikan dan pelatihan yang komprehensif dalam hal perangkat keras komputer, perangkat lunak, serta manajemen dan keamanan jaringan komputer.
                    </p>
                    <p className="text-justify">
                        Siswa yang memilih jurusan TKJ akan terlibat dalam pembelajaran yang mencakup instalasi, konfigurasi, dan pemeliharaan perangkat keras komputer. Mereka juga akan memahami berbagai sistem operasi dan aplikasi perangkat lunak yang umum digunakan dalam dunia teknologi informasi. Selain itu, jurusan ini memfokuskan pada pemahaman mendalam tentang jaringan komputer, termasuk perancangan, implementasi, dan pemecahan masalah yang terkait.    
                    </p>
                    <p className="text-justify">
                        Peserta didik TKJ juga akan diajarkan tentang keamanan informasi dan manajemen risiko, mempersiapkan mereka untuk menghadapi tantangan keamanan siber yang terus berkembang. Mereka akan terlibat dalam praktik kerja industri yang memberikan pengalaman langsung dalam menghadapi situasi dunia nyata dalam dunia teknologi.
                    </p>
                </div>
                <div className="w-[30%] items-center justify-center">
                    <img src="\TLNT_TKJ.png" alt="siswa TKJ" className="w-[85%] h-auto" />
                </div>
            </section>
            
            <div className="h-46 items-center justify-between flex fl-row" id="program">
                <div className="size-full p-8 items-center flex flex-col gap-y-4 bg-rose-950 text-white">
                    <h1 className="text-2xl font-bold">Program Pembelajaran</h1>
                    <div className="flex flex-row gap-x-12 text-lg">
                        <ul className="list-disc">
                            <li>Perakitan Komputer</li>
                            <li>Logika Komputasi</li>
                            <li>Jaringan</li>
                        </ul>

                        <ul className="list-disc">
                            <li>Pemograman</li>
                            <li>Cyber Security</li>
                            <li>Web Server</li>
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

            <footer className="h-12 bg-red-950 text-white items-center justify-center p-2">
                <p className="text-center text-sm">Landing Page ini dibuat untuk praktik kelas X TKJ SMK Cendika Bangsa</p>
                <p className="text-center text-sm">dibuat oleh: Nama Kalian - Jurusan</p>
            </footer>


        </div>
    );
}