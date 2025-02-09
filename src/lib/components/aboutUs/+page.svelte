<script lang="ts">
    import { Bot } from 'lucide-svelte';
  </script>
  
  <div class="min-h-screen bg-black text-white p-6 font-sans">
    <!-- Main About Section -->
    <div class="max-w-4xl h-4xl mx-auto mb-12">
      <div class="relative bg-black rounded-lg p-8 border-2 border-blue-500 shadow-[0_0_30px_rgba(0,149,255,0.5)]">
        <img 
      class="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg blur-[0.1px]" 
      src="/logo.png"
      alt="Background"
    />

        <div class="text-center space-y-6">
          <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 animate-pulse">
            About Us
          </h2>
          <h3 class="text-2xl text-purple-300">Welcome to MISMATCH!</h3>
          <p class="text-purple-200/90 leading-relaxed max-w-2xl mx-auto">
            A one-of-a-kind hackathon hosted by the IEERAS Club of VIT Chennai!
          </p>
          <div class="space-y-4 text-purple-200/80">
            <p class="leading-relaxed max-w-2xl mx-auto">
              Mismatch is all about breaking boundaries, blending ideas, and creating innovative solutions by bringing together unique perspectives. Whether you're a coder, designer, strategist, or innovator, this is your chance to collaborate, experiment, and push the limits of creativity.
            </p>
            <p class="leading-relaxed max-w-2xl  mx-auto">
              With real-world challenges and an open platform to showcase your groundbreaking ideas,<br/> Mismatch promises an experience like no other! Step out of your comfort zone, rethink possibilities, and build solutions that could <br/>redefine the future.
            </p>
          </div>
          <p class="text-xl font-medium text-pink-400 mt-8">
            Let's mismatch, create, and reshape the world of tomorrow!
          </p>
        </div>
      </div>
    </div>
  
    <!-- Lower Section -->
    <div class="max-w-5xl mx-auto px-4">
      <div class="grid grid-cols-12 gap-8">
        <!-- Left Side -->
        <div class="col-span-5 space-y-8 pl-10">
          <!-- IEERAS Club Card -->
          <div class="relative">
            <div class="absolute inset-0 bg-purple-600/30 rounded-xl blur-xl"></div>
            <div class="relative bg-black/90 rounded-xl p-6 border-2 border-purple-500">
              <p class="text-center text-purple-200/90 leading-relaxed">
                The IEERAS Club at VIT Chennai is a community of tech enthusiasts, innovators, and problem-solvers committed to fostering a culture of collaboration and learning.
              </p>
            </div>
          </div>
  
          <!-- VIT Chennai Images -->
          <div class="space-y-4">
            <img 
              src="/api/placeholder/400/200"
              alt="VIT Chennai Campus"
              class="w-full h-48 object-cover rounded-lg border border-purple-500/50"
            />
            <img 
              src="/api/placeholder/400/200"
              alt="VIT Chennai Campus"
              class="w-full h-48 object-cover rounded-lg border border-purple-500/50"
            />
          </div>
        </div>
  
        <!-- Center Line -->
        <div class="col-span-2 flex justify-center">
          <div class="w-px h-40  bg-purple-500/50"></div>
        </div>
  
        <!-- Right Side -->
        <div class="col-span-5 space-y-8">
          <!-- Logo -->
          <div class="flex justify-end mb-8">
            <div class="pb-7 w-2xl  ">
              <img class="  w-56 h-56 object-contain" src="/ras.svg" alt="IEERAS Logo" />

            </div>
          </div>
  
          <!-- VIT Chennai Card -->
          <div class="relative mt-8">
            <div class="absolute inset-0 bg-purple-600/30 rounded-xl blur-xl"></div>
            <div class="relative bg-black/90 rounded-xl p-6 border-2 border-purple-500">
              <p class="text-center text-purple-200/90 leading-relaxed">
                At VIT Chennai, a premier institute known for excellence in education and research, we aim to provide a platform for bright minds to shine.
              </p>
              <div class="absolute -bottom-6 -right-6">
                <Bot class="w-12 h-12 text-purple-500 transform rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>