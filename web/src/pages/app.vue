<script setup lang="ts">
import '../style/app.css';

const metaStore = useStore('meta');

const posts = ref([]);
const postUpvotes = ref({});

const router = useRouter();

const navigateToPost = (id: string) => {
  router.push(`/dashboard/c/post/${id}`);
};

const upvote = (id: string) => {
  postUpvotes.value[id] = postUpvotes.value[id] || 0;
  postUpvotes.value[id] += 1;
};

const downvote = (id: string) => {
  postUpvotes.value[id] = postUpvotes.value[id] || 0;

  if (postUpvotes.value[id] > 0) {
    postUpvotes.value[id] -= 1;
  }
};

onMounted(async () => {
  const { error, result } = await aeria().post.GET()

  if ( error ) {
    return metaStore.$actions.spawnToast({
      title: 'Error!',
      message: 'Error fetching API'
    })
  }

  posts.value = result.data
})

</script>

<template>
  <body>
    <!-- Header -->
    <header class="header">
        <h1>TeClas News</h1>
    </header>

    <!-- Main Content -->
    <main class="content">
        <!-- List of posts -->
        <ul class="post-list">
            <li v-for="post in posts"
                :key="post._id"
                class="post-item"
            >
                <div class="post-buttons">
                  <aeria-icon large v-clickable @click="upvote(post._id)"icon="arrow-fat-up" />
                  <aeria-icon large v-clickable @click="downvote(post._id)" icon="arrow-fat-down" />
                </div>
                <div class="post-wrapper">
                  <a :href="post.link" class="post-title">{{post.title}}</a>
                  <p class="post-body">
                    {{post.body}}
                  </p>
                  <div class="post-info"> {{postUpvotes[post._id] || 0}} points by {{post.owner?.name}} | {{post.replies?.length}} comments</div>
                </div>
            </li>
        </ul>
    </main>

    <div class="add-post">
      <h4>Adicionar postagem</h4>
      <aeria-insert-panel
        collection="post"
        :form="['title','link','body']"
        @insert="posts.unshift($event)"
      />
    </div>

  </body>
</template>

