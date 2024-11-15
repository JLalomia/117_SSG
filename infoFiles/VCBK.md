## History Behind Vint Cerf and Bob Khan
### WHO
- Vint Cerf: Known as one of the "fathers of the internet," Cerf is a computer scientist who co-designed TCP/IP, a set of protocols critical to the functioning of the internet.
- Bob Kahn: Another key figure in the development of the internet, Kahn worked with Cerf to create TCP/IP, aiming to solve the challenges of connecting multiple different networks.

### WHAT
- Transmission Control Protocol (TCP): A communication protocol designed to provide reliable, ordered, and error-checked data transmission between different computers over a network. TCP ensures that data is sent in the correct order and received without errors.
    - Key Function: TCP breaks large chunks of data into smaller packets, sends them over the network, and ensures that they are reassembled correctly at the destination.
- Internet Protocol (IP): The addressing system that allows data to be sent from one computer to another over the internet. It assigns unique addresses to each device (like a home address) and is responsible for routing the packets across networks.
#### Key Function
- IP is responsible for routing packets across different networks and making sure they reach their intended destination.

### WHY
- Interoperability Across Networks: In the early 1970s, there was no unified way for different types of networks to communicate with each other. Networks had unique architectures, making them incompatible. Cerf and Kahn’s goal was to create a standardized protocol that could link various networks (e.g., ARPANET, satellite networks, local area networks) so they could share information.
- Reliable Data Transmission: They needed a solution that could transmit data reliably, even over unreliable networks, where data might be lost, duplicated, or arrive out of order. TCP/IP was designed to handle these challenges by ensuring the integrity of data transmissions.

### WHEN
#### Vint Cerf
* Cerf and Kahn began their work on TCP/IP in 1973
* The protocol was finalized in 1978 and became the standard for ARPANET in 1983, eventually forming the basis of the modern internet
#### Bob Khan
* Kahn first conceived of the internet's "network of networks" architecture in the early 1970s
* He began collaborating with Cerf in 1973, leading to the development of TCP/IP
* ARPANET adopted TCP/IP as its standard in 1983, which laid the foundation for the modern internet
#### OVERALL TIMELINE
- 1973: Bob Kahn first proposed the concept of TCP while working at ARPA (Advanced Research Projects Agency). He invited Vint Cerf to help develop it.
- 1974: Cerf and Kahn published their landmark paper, "A Protocol for Packet Network Intercommunication," which described TCP/IP.
- 1983: TCP/IP was adopted as the standard protocol for ARPANET, and from that point, it became the foundation for the internet.
### WHERE
- United States: The development of TCP/IP took place primarily through ARPA, which was based in the U.S. The early implementations occurred in research labs and universities.
- Global Influence: As the internet grew, TCP/IP became the dominant protocol suite worldwide, enabling the growth of the global internet infrastructure.
### HOW
* Cerf and Kahn designed TCP/IP to handle the technical challenges of internetworking, specifically packet-switched data transmission across various networks
* TCP handles breaking data into packets and reassembling them, while IP ensures the packets are routed to the right destination
* Kahn developed the open-architecture networking approach, meaning that different networks could be interconnected without needing to change their internal structure
* Together with Cerf, he designed TCP/IP to handle end-to-end data transmission between computers, regardless of the underlying network infrastructure
- TCP/IP Architecture: TCP and IP work together to ensure the reliable transmission of data:
    - IP: Handles the routing of packets from one computer to another by assigning IP addresses to each device and determining the best path through the network.
- TCP: Ensures that packets arrive correctly by establishing a connection between two devices and handling error correction, retransmission of lost packets, and reordering packets that arrive out of sequence.
- Packet-Switched Networks: TCP/IP was designed to work over packet-switched networks, where data is broken into small packets that are sent individually and reassembled at the destination. This approach allows for efficient use of network resources, as packets can take different routes to their destination depending on network conditions.

### EXAMPLES
- The Internet: TCP/IP is the underlying protocol that allows the modern internet to function. Every time you send an email, stream a video, or browse the web, TCP/IP is responsible for routing and ensuring the reliable delivery of your data.
- Adoption by ARPANET (1983): When ARPANET adopted TCP/IP in 1983, it became the first major network to use the protocol, marking the beginning of the modern internet era.
- IPv4 and IPv6: The current versions of the Internet Protocol, IPv4 and IPv6, are direct descendants of the original IP protocol developed by Cerf and Kahn. IPv6 was introduced to address the limited number of IP addresses available in IPv4, allowing for continued growth of the internet.
### IMPORTANCE
- Standardized Communication: TCP/IP provides a universal standard for communication across different types of networks, enabling the internet to grow into a truly global system.
- Scalability: TCP/IP was designed to be scalable, making it possible for the internet to expand from a small number of nodes in ARPANET to billions of devices around the world today.
- End-to-End Principle: One of the key principles behind TCP/IP is the end-to-end principle, where the intelligence of the network is located at the endpoints (the devices), rather than in the network itself. This flexibility has allowed for innovation and the development of new applications, from the web to peer-to-peer communication.