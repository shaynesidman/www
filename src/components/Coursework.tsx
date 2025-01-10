import "./Coursework.css"
import Course from "./Course"
import Title from "./Title"

export default function Coursework() {
  return (
    <div className="coursework-div">
      <Title text="Coursework" />
      <div className="course-gallery">
        <Course 
          title="CS 0011: Introduction to Computer Science"
          text="Taught in C++, CS 0011 taught programming basics, including variables, arrays, basic linux commands, conditionals and loops, functions, file I/O, debugging, functional programming vs. OOP, basic complexity analysis, dynamic memory allocation, and pointers. Weekly homeworks presented unique problems to reinforce the topics learned in class, from decrypting Caesar ciphers by comparing observed vs. expected letter frequencies in the English alphabet, to recreating the board game Splendor in C++."
        />
        <Course
          title="CS 0015: Data Structures"
          text="The content of CS 0015 is your run-of-the-mill data structures material. This content includes dynamic arrays (vectors), linked lists, stacks, queues, binary trees, binary search trees, balanced binary search trees (implemented as AVL trees), priority queues and heaps, hash tables, and graphs. The course also focuses on some basic algorithms that utilize the aforementioned data structures, including graph traversals, Dijkstra’s Algorithm, sorting algorithms (comparison-based and non-comparison), and the Huffman Coding Algorithm. This course is also taught in C++, with a deeper dive into language features such as Makefiles, copy constructors, overloaded assignment operators, destructors, and tools like Valgrind for memory management. One significant homework assignment was to recreate the grep command in a C++ program via hash tables."
        />
        <Course
          title="CS 0040: Machine Structure and Assembly Language Programming"
          text="CS 0040 transitions from C++ to C, requiring manually-managed memory (I found this out the hard way in the first week of class). Using a lower-level language is useful because this course teaches the structure of modern computers, discussing how and where information is stored in computers, how C programs are compiled and executed, virtual memory and context switching, the memory hierarchy (main memory/RAM, caches, CPU registers), machine arithmetic, and assembly language. To improve programming habits, the course also focuses on abstraction and modularity. To illustrate these concepts, homeworks were designed with applicable subjects in mind, including compression, decompression, and a universal machine."
        />
        <Course
          title="CS 0160: Algorithms"
          text="At many universities, an algorithm course is combined with data structures since there is a degree of overlap. At Tufts, these two courses are separate, which enables a more thorough analysis of both subjects. On the surface, CS 0160 may seem to be an entire course of covering pre-existing algorithms. Under the hood, however, these algorithms are presented as a medium for discussing general approaches to solving all kinds of programming problems. The course begins with a discussion of several sorting algorithms, which are used to introduce complexity analysis, divide and conquer algorithms, recursion trees, induction proofs, and the master method. Problem lower bounds are also discussed to prove, for example, why comparison-based sorting algorithms have a lower bound of Ω(nlogn). Dynamic programming is a very large focus, as are graph algorithms covering SSSP and APSP problems. We also discuss algorithms tied to data structures. To sum all of this up, CS 0160 is essentially a LeetCode introduction course, with many exam problems being pulled directly from the website. But, what I most enjoyed about this course was the open-ended nature of the problems presented. CS 0160 exists to build the toolkit required to solve programming questions when no parameters or hints are given. Plus, it doesn’t hurt to boost your LeetCode rank a little bit by doing some of the problems in class."
        />
        <Course
          title="CS 0105: Programming Languages"
          text="CS 0105 covers the ideas and techniques that compose modern-day programming languages and will continue to dominate future ones as well. Such topics include algebraic laws, abstract syntax, operational semantics, recursive programming, functions (first class, higher order, etc.), continuation-passing style, pattern matching, type systems, type checking, type inference, large-scale programming via OOP, and functional programming. Notable assignments included writing our own type checking and type inference algorithms and creating an Integer class with no integer overflow. One unique aspect of the course was the use of smaller bridge languages rather than commonly-used ones. Each of these languages exposed a unique aspect of programming languages which can be found in larger ones such as C and Python."
        />
        <Course
          title="CS 0116: Introduction to Security"
          text="The first computer science elective that I took was CS 0116. Given that cybersecurity is such a broad topic, this course provides just a large overview. Topics include (but are not limited to) networks, vulnerabilities, web security, malware, forensics, and static and dynamic analysis. One of the most enjoyable moments of this course was a week-long game of capture-the-flag game that encapsulated the course content."
        />
        <Course
          title="CS 0119: Big Data"
          text="Big Data was the next CS elective I took. CS 0119 outlines techniques and infrastructures used in the big data industry such as parallel and distributed systems, map-reduce operations, scalable platforms, data streaming, and cloud-based computing. The course was taught in Python, however Spark (specifically PySpark), Java, Scala, and SQL were used as well."
        />
        <Course
          title="CS 0061: Discrete Math"
          text="Proofs, proofs, and more proofs. Discrete Math teaches students how to write proofs and all the tools necessary to do so. Topics include Boolean Algebra, sets, quantifiers, combinatorial proofs, (equivalence) relations, partitions, induction and strong induction, contradiction and contrapositive, pigeonhole principle, RSA Cryptography, and graphs."
        />
        <Course
          title="MATH 0070:  Linear Algebra"
          text="Topics covered include vector spaces and their bases, vector subspaces, linear transformations over real and complex numbers, linear independence, linear systems of equations, dimensions, matrices and their multiplication, invertible matrices, matrix rank, determinants, change of basis, eigenvalues and eigenvectors, diagonalization, orthogonality and applications."
        />
      </div>
    </div>
  );
}