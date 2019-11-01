import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MatTabsModule,
            ReactiveFormsModule,
            HttpClientTestingModule,
            RouterTestingModule,
            BrowserAnimationsModule,
            FormsModule
        ],
      declarations: [ 
          TabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

// Unit Test Evaluation:

// Write unit test cases for the displayName() exist in tabs component.
// Test cases should be covered for all possible scenarios and all properies used in that function.
// Note: Test case setup is already there in .spec file of tabs component.
});
