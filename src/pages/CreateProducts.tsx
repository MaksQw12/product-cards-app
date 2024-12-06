import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/createProduct.module.scss';
import { useProductStore } from '../store/ProductStore';

const CreateProducts = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const addProduct = useProductStore((state) => state.addProduct);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent) => {
    event.preventDefault();
    let file: File | null = null;

    if (event.type === 'drop') {
      file = (event as React.DragEvent).dataTransfer.files[0];
    } else if (event.target instanceof HTMLInputElement && event.target.files) {
      file = event.target.files[0];
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !image || !status || !gender) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      image,
      status,
      gender,
      liked: false,
    };

    addProduct(newProduct);

    setName('');
    setImage('');
    setStatus('');
    setGender('');

    navigate(-1);
  };

  return (
    <div className={styles.createProduct}>
      <h2>Создать новый продукт</h2>
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Название</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Фото продукта</label>
          <div
            className={styles.imageUpload}
            onDrop={handleImageUpload}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('image')?.click()}>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className={styles.fileInput}
              style={{ display: 'none' }}
            />
            {image ? (
              <img src={image} alt="product" className={styles.previewImage} />
            ) : (
              <span>Перетащите изображение сюда или выберите файл</span>
            )}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status">Статус</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className={styles.inputField}>
            <option value="">Выберите статус</option>
            <option value="Alive">Жив</option>
            <option value="Dead">Мертв</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="gender">Пол</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className={styles.inputField}>
            <option value="">Выберите пол</option>
            <option value="Male">Мужской</option>
            <option value="Female">Женский</option>
          </select>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.submitButton}>
          Добавить продукт
        </button>
      </form>
    </div>
  );
};

export default CreateProducts;
