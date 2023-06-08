# FBL-MIMO System Model（one transmitter and one receiver)

A multi-antenna transmitter sends packets with blocklength of $L$ to a multi-antenna receiver. 

The transmitter is equipped with $N_T$ antennas. The receiver is equipped with $N_R$ antennas. Without loss of generality, we assume that $N_T \leq N_R$ in this paper.

We also assume that the transmitter does not know the channel state information (CSI) whereas the receiver knows the CSI.

When the transmitter sends signal vector $\mathbf{x} \in \mathbb{C}^{N_T \times 1}$ with
$$
\mathbb{E}\left[\mathbf{x x}^H\right]=\frac{P}{M} \mathbf{I}_{N_T},
$$
where $P$ refers to transmission power of the transmitter, the received signal vector at the receiver is
$$
\mathbf{y}=\mathbf{H} \mathbf{x}+\mathbf{z},
$$
where $\mathbf{H} \in \mathbb{C}^{N_R \times N_T}$ denotes the channel matrix from transmitter to receiver and $\mathbf{z} \sim \mathcal{C N}\left(\mathbf{0}, \sigma^2 \mathbf{I}_{N_R}\right)$ denotes the additive Gaussian noise vector at the receiver. Here, we consider the **flat uncorrelated Rayleigh fading MIMO channel**. 

The achievable rate of the MIMO short-packet communication system is
$$
R=C-\sqrt{\frac{V}{{L}}} Q^{-1}(\varepsilon),
$$
where $\gamma=P /\left(N_T \sigma^2\right)$, $\varepsilon$ denotes the decoding error probability, $Q(x)=\frac{1}{\sqrt{2 \pi}} \int_x^{\infty} \exp \left(-\frac{\tau^2}{2}\right) d \tau$ denotes the Gaussian $Q$-function,
$$
C=\log _2 \operatorname{det}\left(\mathbf{I}_{N_T}+\gamma \mathbf{H}^{H}\mathbf{H}\right)
$$
refers to the Shannon capacity with a Wishart matrix $\mathbf{H}^{H}\mathbf{H} \in \mathbb{C}^{N_T \times N_T}$, and
$$
V=\left(N_T-\sum_{j=1}^{N_T}\left(1+\gamma \lambda_j\right)^{-2}\right) \cdot\left(\log _2 e\right)^2
$$
denotes the channel dispersion with $\lambda_j$ representing the $j$th unordered eigenvalue of $\mathbf{H}^{H}\mathbf{H}$.

***Remark:*** Since $\operatorname{det}\left(\mathbf{I}_M+\mathbf{AB}\right)=\operatorname{det}\left(\mathbf{I}_N+\mathbf{BA}\right)$, it is similar for $N_T > N_R$, where 
$$
C=\log _2 \operatorname{det}\left(\mathbf{I}_{N_R}+\gamma \mathbf{H}\mathbf{H}^{H}\right)
$$
refers to the Shannon capacity with a Wishart matrix $\mathbf{H}\mathbf{H}^{H} \in \mathbb{C}^{N_R \times N_R}$, and
$$
V=\left(N_R-\sum_{j=1}^{N_R}\left(1+\gamma \lambda_j\right)^{-2}\right) \cdot\left(\log _2 e\right)^2
$$
denotes the channel dispersion with $\lambda_j$ representing the $j$th unordered eigenvalue of $\mathbf{H}\mathbf{H}^{H}$.