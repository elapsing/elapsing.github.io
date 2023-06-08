# Multi-User (MU-) MIMO System Model (for FBL)

## Users with single antenna：equivalent uplink SIMO

$K$ users, user antenna = 1, base station antenna = $M$, usually assume $M \geq K$

### Signal model

The received signal at the BS can be expressed as  $\mathbf{y} \in \mathbb{C}^{M \times 1}$
$$
\mathbf{y}=\mathbf{H} \mathbf{x}+\mathbf{z}=\sum_{k=1}^{K}\mathbf{h}_kx_k+\mathbf{z},
$$
where $\mathbf{H}\in \mathbb{C}^{M \times K}$ is the channel matrix between the BS and all the users, signal vector $\mathbf{x}=\left[x_1, \ldots . x_K\right]^{\mathrm{T}} \in \mathbb{C}^{K \times 1}$ in which $x_k$ denote the transmit signal from user $k$ to the BS, $\mathbf{z}\in \mathbb{C}^{M \times 1}$ is the additive white Gaussian noise (AWGN) vector at the BS, which has independent and identically distributed (i.i.d.) $\mathcal{C} \mathcal{N}\left(0, \sigma_n^2\right)$ entries. Global CSI is assumed to be available at the users and the base station.

### Channel model

We assume quasi-static fading channels for which the fading coefficients remain constant during each transmission block and change independently from one block to the other.

Let $\mathbf{h}_k=\sqrt{\beta_k s_k} \tilde{\mathbf{h}}_k\in \mathbb{C}^{M \times 1}$ denotes the channel coefficient vector of user $k$, where $\tilde{\mathbf{h}}_k$ represents the Rayleigh fading channel coefficient of user $k$, whose entries are independently and identically distributed (i.i.d.) complex Gaussian random variables with zero mean and variance $\sigma_h^2$, i.e.,  $\tilde{\mathbf{h}}_k \sim \mathcal{C N}\left(\mathbf{0}, \sigma_h^2\mathbf{I}_M\right)$; $\beta_k$ represents the path loss; $s_k$ represents the shadow fading obeying a log-normal distribution whose variance is $\sigma_S^2$. 

In this way, we can decompose the channel matrix $\mathbf{H}$ into the following form:
$$
\mathbf{H}=\left[\mathbf{h}_1, \ldots, \mathbf{h}_K\right] \triangleq \tilde{\mathbf{H}} \mathbf{D}^{\frac{1}{2}} \mathbf{S}^{\frac{1}{2}},
$$
where $\tilde{\mathbf{H}}=[\tilde{\mathbf{h}}_1, \ldots, \tilde{\mathbf{h}}_K], \mathbf{D}=\operatorname{diag}\left(\beta_1, \ldots \beta_K\right), \mathbf{S}=\operatorname{diag}\left(s_1, \ldots s_K\right)$. 

***Remark:*** Since we consider large-scale path loss and slow shadow fading transformation, $\mathbf{D}$ and $\mathbf{S}$ are regarded as two constant matrices.

#### Gaussian distribution in vectors

To prove that  $\tilde{\mathbf{h}}_k \sim \mathcal{C N}\left(\mathbf{0}, \sigma_h^2\mathbf{I}_M\right)$ $\Longleftrightarrow$ $\tilde{\mathbf{h}}_k$ has independent and identically distributed (i.i.d.) $\mathcal{C} \mathcal{N}\left(0, \sigma_n^2\right)$ entries: 

***Marginal Consistency of Multidimensional Gaussian Distribution***

<img src="https://pic1.zhimg.com/80/v2-76c4e421118064ef8f6392aa2e617a88_1440w.webp" alt="img" style="zoom:150%;" />

### Instantaneous achievable rate for FBL

The achievable rate of user $k$ is
$$
R_k(\gamma, L,\varepsilon)=C(\gamma_k)-\sqrt{\frac{V(\gamma_k)}{{L}}} Q^{-1}(\varepsilon_k),
$$
where $\gamma_k=p_k||\mathbf{h}_k||^2 /\sigma^2$, $\varepsilon_k$ denotes the decoding error probability, $Q(x)=\frac{1}{\sqrt{2 \pi}} \int_x^{\infty} \exp \left(-\frac{\tau^2}{2}\right) d \tau$ denotes the Gaussian $Q$-function,
$$
C(\gamma_k)=\log _2 \left(1+\gamma_k \right)
$$
refers to the Shannon capacity , and
$$
V(\gamma)=\left(1-\left(1+\gamma_k \right)^{-2}\right) \cdot\left(\log _2 e\right)^2.
$$
***Remark:*** Now we have $||\mathbf{h}_k||^2 = \mathbf{h}_k^H \mathbf{h}_k \in \mathbb{C}^{1 \times 1}$, for which  $\mathbf{h}_k^H \mathbf{h}_k$ is the eigenvalue of itself, so the uplink SIMO scenario is reduced to be consistent with the SISO case according to the conclusion in **'FBL-MIMO System Model'**.

## Users with multiple antennas

To be supplemented...