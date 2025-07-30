document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const gridSizeBtn = document.getElementById('grid-size-btn');
    
    // Default grid size
    let gridSize = 16;
    
    // Create initial grid
    createGrid(gridSize);
    
    // Button event listener for changing grid size
    gridSizeBtn.addEventListener('click', () => {
        let newSize = prompt('Enter number of squares per side (max 100):', 16);
        
        // Validate input
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize <= 0) {
            alert('Please enter a positive number');
            return;
        }
        if (newSize > 100) {
            alert('Maximum size is 100');
            newSize = 100;
        }
        
        // Create new grid
        gridSize = newSize;
        createGrid(gridSize);
    });
    
    // Function to create the grid
    function createGrid(size) {
        // Clear existing grid
        container.innerHTML = '';
        
        // Calculate square size
        const squareSize = 600 / size;
        
        // Create grid squares
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            
            // Add hover effect
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = '#333';
            });
            
            container.appendChild(square);
        }
    }
});