function showScene(sceneId) {
    // Hide all scenes
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => {
        scene.style.display = 'none';
    });

    // Show the selected scene
    const selectedScene = document.getElementById(sceneId);
    selectedScene.style.display = 'block';
}
