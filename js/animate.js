function animate(){ 
  if(paused == false){
      // Start timing the events from here
  // stats.begin();

  // Set the slider value to the current iteration
  $('#slider').slider('value', iteration);

  // Update number of iterations within the interface
  $('#iteration').html(iteration + " / " + ( coordinates.length - 2 ) );

  if(animationSpeed < 1){
    iterationDelayCounter = iterationDelayCounter + 1;
    if(iterationDelayCounter == counterMax){
      if(iteration < ( (coordinates.length -1) - animationSpeed ) && paused == false){
        iteration = iteration + 1;
        iterationDelayCounter = 0;
      }
    }    
  }else{
  // Iterate of not paused or at end of coordinates array
    if(iteration < ( (coordinates.length -1) - animationSpeed ) ){
      iteration = iteration + (1 * animationSpeed );
    }
  }

  if(replay == true){
    if(iteration >= ( (coordinates.length -1) - animationSpeed ) ){
      iteration = 0;
    }
  } 

  // Executed render with the scene and camera as input
  

  // Stop timing the events from here
  // stats.end();

  // Execute animate() again after its executed and rendered again
  }

    // Updates all markers in the markers' array
  for(var i = 0; i < markers.length; i++){
    markers[i].update(selected, coordinates, iteration);
  }

  // Updates all connections in the connections' array
  for(var i = 0; i < connections.length; i++){
    connections[i].update(selected, markers);
  }

  webglRenderer.render(scene, camera);
  requestAnimationFrame(animate);
}
