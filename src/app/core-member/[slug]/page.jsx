"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const members = {
    "arup-roy": {
        name: "Dr. Arup Roy",
        img: "/hod1.jpeg",
        title: "Associate Professor & HOD",
        bio: "Arup Roy received his PhD in Computer Science and Engineering from Birla Institute of Technology, India. He is currently working as an Associate Professor at Haldia Institute of Technology, West Bengal, India. Previously, he worked as an assistant Professor at Amity University, Manipal University. His research interests include Information Retrieval, Hybrid Intelligence, Artificial Intelligence, and Machine Learning."
    },
    "manasija-bhattacharya": {
        name: "Mr Manasija Bhattacharya",
        img: "/m2.jpeg",
        title: "Assistant Professo",
        bio: "Mr. Manasija Bhattacharya is currently pursuing a PhD in Computer Science and Engineering at NIT Rourkela",
    },
    "moumita-ghosh": {
        name: "Moumita Ghosh",
        img: "/m3.jpeg",
        title: "Assistant Professor",
        bio: `My name is Moumita Ghosh, and I am currently serving as an Assistant Professor at Haldia Institute of Technology. I completed my B.Tech. in Information Technology from Maulana Abul Kalam Azad University of Technology (formerly known as West Bengal University of Technology) in 2010, followed by an M.Tech. in Computer Science and Engineering in 2013.
I possess five years of research experience at Calcutta University under the prestigious Visvesvaraya Ph.D. Scheme for Electronics and IT and am presently pursuing my Ph.D. from the same institution. Over the course of my career, I have accumulated more than a decade of experience in teaching and research.
Throughout this period, I have gained proficiency in programming languages such as C, Java, Python, and R, along with a strong foundation in core subjects including Computer Organization and Architecture, Digital Electronics, Computer Networks, and Operating Systems. In addition, I have developed expertise in advanced areas such as Artificial Intelligence, Machine Learning, Deep Learning, and Reinforcement Learning.
My research interests are primarily centered around Machine Learning and Activity-Based Recognition utilizing IoT systems. To date, I have published eight research works, including contributions to conferences, journals, and a patent.`,
    },
    "sk-sahnawaj": {
        name: "Sk. Sahnawaj",
        img: "/m4.jpeg",
        title: "Assistant Professor",
        bio: "Dr. Sk Sahnawaj is currently serves as a Professor at the Department of Information Technology at Haldia Institute of Technology. His research interests include Information Securirt, Deep Learning, NLP, Wireless Network, Mobile Ad-Hock Network.",
    },
};

export default function TeacherPage() {
    const params = useParams();
    const slug = params?.slug;
    const member = members[slug];

    if (!member) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">Teacher not found. <br /><Link href="/">Go back</Link></div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <div className="max-w-3xl mx-auto bg-white/5 p-10 rounded-3xl text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-3xl font-bold mt-6">{member.name}</h1>
                <p className="text-gray-300 mt-2">{member.title}</p>
                <p className="mt-6 text-gray-300">{member.bio}</p>
                <div className="mt-8">
                    <Link href="/" className="text-blue-400">Back to Home</Link>
                </div>
            </div>
        </main>
    );
}
