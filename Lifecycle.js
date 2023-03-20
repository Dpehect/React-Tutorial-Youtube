import React, { Component } from 'react';

class ExampleComponent extends Component {
  // Bileşen oluşturulduğunda ilk olarak constructor yöntemi çalışır.
  constructor(props) {
    super(props);
    console.log('constructor çalıştı');
    // State adlı özellik, bileşenin iç durumunu saklamak için kullanılır.
    this.state = {
      message: 'Merhaba Dünya!'
    };
  }
  
  // Bileşen oluşturulduktan sonra ilk render tamamlandıktan hemen sonra componentDidMount yöntemi çağrılır.
  componentDidMount() {
    console.log('componentDidMount çalıştı');
  }

  // Bileşenin state veya props değerleri değiştiğinde, bileşen tekrar render edildikten sonra componentDidUpdate yöntemi çağrılır.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate çalıştı');
  }

  // Bileşen ayrılmadan önce componentWillUnmount yöntemi çağrılır.
  componentWillUnmount() {
    console.log('componentWillUnmount çalıştı');
  }

  // Bileşenin görüntüsünü oluşturan ve JSX formatında bir yapı döndüren yöntem.
  render() {
    console.log('render çalıştı');
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.setState({ message: 'Güle güle Dünya!' })}>
          Güncelle
        </button>
      </div>
    );
  }
}

// Bileşen, diğer bileşenler tarafından da kullanılabilsin diye export ediliyor.
export default ExampleComponent;
