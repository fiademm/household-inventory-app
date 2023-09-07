if (newTitle.length === 0 || newDescription.length === 0) {
            Toastify({
                text: 'Please fill in all fields',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: 'top',
                position: 'right',
                backgroundColor: '#f86c6b',
                stopOnFocus: true,
                onClick: null,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                autoClose: true,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                closeButton: false,
                rtl: false,
                showMethod:'slideDown',
                timeOut: 5000,
                extendedTimeOut: 1000
            }).showToast();
        } else {
            handleUpdate();
        }