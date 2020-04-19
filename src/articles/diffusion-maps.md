August 2019

## Deriving Political Affiliation With Diffusion Maps

### Abstract

Natural language processing has a large computational burden due to the high dimensionality and sparsity of textual data. Diffusion Maps is a mathematical technique that can be used to reduce the dimensionality of data, even if the data has been sampled from a nonliner underlying structure. This paper will employ and evaluate Diffusion maps as a dimensionality reduction technique for textual data, using it to derive the political party for members of the United States Congress based on Twitter activity.

### Introduction & Motivation

#### Curse of Dimensionality

There are many applications where a ”Curse of Dimensionality” can affect one’s ability to decipher a dataset. This curse plagues many fields, such as numerical analysis, statistical sampling, combinatorics, machine learning, data mining and databases. Intuitively it makes a lot of sense; as the dimensionality of a dataset increases, so does the complexity of the result space. As more dimensions are added, a larger sample of data is needed to properly represent the training space and get a robust result.

One example of where this issue is relevant is within database systems and data mining. Organizing and searching data often relies finding areas in the space where objects cluster with similar properties. In high dimensional data, objects can appear sparse and thus dissimilar which can make efficient organization of high dimensional data difficult.

In machine learning, models attempt to ”learn” about a naturally occurring state or structure from a finite set of data. This data is often derived from a high dimensional feature space, where each value can assume a high range of values. Therefore, machine learning models require an enormous amount of training data in order to see enough combinations to make robust decisions.

Natural Language Processing is a field that is affected by many of aspects as data mining and machine learning face. Textual data is sparse, many documents of text have no terms in common, and are therefore extremely dissimilar. When thinking about the feature space of a collection of documents, we can think of words are being features, and an ”importance” score as being it’s particular value. We can quickly see how vast such a result space can be, and thus, how vast a textual dataset would need to be in order to adequately train a model.

#### Dimensionality Reduction

The goal of an analysis or machine learning model is to better understand some naturally occurring phenomena, which exists in some vast dimensional space. In practice, it is simply not feasible to capture all of the features of this space, so a means of extracting patterns from the feature space is needed, such as Dimensionality Reduction.

In practice there exist many different techniques for reducing dimensionality, and can be divided into two methodologies: feature selection and feature extraction. Feature selection methods attempt to algorithmically find a subset of relevant features, acting under the assumption that the data contains some features that are either redundant or irrelevant. Feature extraction is a process that maps the high dimensional data into a lower dimensional embedding.

#### Linear vs. Nonlinear Techniques

Feature extraction methodologies can be further divided into techniques accounting for nonlinear and linear underlying data structures. In the real world many phenomena being described by finite data sets are nonlinear in nature.

#### A Motivating Example - Swiss Roll Dataset

A good data structure to show how Diffusion Maps can be useful is the "swiss roll". Below, 4000 points are sampled along a nonlinear underlying geometry resembling a swiss roll. If we were to "zoom in" on a particular area of this structure, the local space would appear linear; that is, Euclidean distance could be used to accurately measure distance between points.

```
import numpy as np
from mpl_toolkits import mplot3d
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
%matplotlib inline

fig = plt.figure(figsize=(12,12))
np.random.seed(0)

noise = 0.1
h = 60 * np.random.rand(n, 1)
t = (3*np.pi/2)*(1 + 2*np.random.rand(n, 1))
X = np.hstack((t*np.cos(t), h, t*np.sin(t))) + noise*np.random.rand(n, 3)

ax = fig.add_subplot(projection='3d')
ax = plt.axes(projection='3d')
x = X[:,0]; y = X[:,1]; z = X[:,2]
ax.scatter3D(x, y, z, c=t[:,0])
```

![](/images/diffusion_maps/swiss_roll.png)

Globally, Euclidean distance cannot be used since geodesic distance must be taken into account along the swiss roll manifold. Using the following visual example, Euclidean distance will indicate that the distance between a yellow point and a blue point would be shorter than the distance between a yellow point and a green point. We can see from the nonlinear structure of the data that this is not possible; a distance measure must travel along the swiss roll when measuring distance.

Therefore, a useful reduction in dimensionality would be to "unroll" the swiss roll, since it would preserve the geodesic distances between points along the spiral. Additionally, with an unrolled structure, we are free to use a Euclidean distance measure since the nonlinear geometry of the data is accounted for.

#### Principal Component Analysis

In the below figure, Principal Component Analysis (PCA) with $k=2$ is applied to the swiss roll, and color mappings from Figure \ref{fig:swiss roll} are applied to the data. It is clear that geodesic distances are not preserved within PCA's linear subspace. Intuitively, it seems that PCA is simply "taking a picture" of the data from a linear window along two of the axes. Eucliden distance in this 2-dimensional space would tell us that yellow points are close to blue points, which we know is not the case according to the underlying structure of the data.

```
from sklearn.decomposition import PCA
plt.figure(figsize=(12,12))

Y = PCA(n_components=2).fit_transform(X)
plt.scatter(Y[:,0], Y[:,1], c=t[:,0])
```

![](/images/diffusion_maps/swiss_roll_pca.png)

#### Diffusion Maps

In Figure \ref{fig:swiss roll dm}, we can see that the Diffusion Maps technique successfully "unrolls" the data, preserving the geodesic distances between points. It correctly embeds the data into a lower dimensional subspace along the nonlinear geometry. This reduction of dimensionality is especially useful we are now able to evaluate the data using linear methods, since the subspace is Euclidean.

```
plt.figure(figsize=(12,12))
eps = 3

# Generate final matrix A, and row normalized matrix M.
A = metrics.pairwise.rbf_kernel(X, gamma=1/(2*eps))
M = A/A.sum(axis=1, keepdims=True)

# Get the eigenvalues/vectors of M.
# We normalize by the first eigenvector.
W, V = np.linalg.eig(M)
V = V/V[:,0]

plt.scatter(V[:,1], V[:,2], c=t[:,0])
```

![](/images/diffusion_maps/swiss_roll_dm.png)
